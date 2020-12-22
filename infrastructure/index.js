const fs = require('fs');
const { promisify } = require('util');
const exec = promisify(require('child_process').exec)
const {S3Client, ListObjectsCommand, DeleteObjectsCommand, PutObjectCommand} = require('@aws-sdk/client-s3');
const {CloudFormationClient, UpdateStackCommand, CreateStackCommand, DeleteStackCommand} = require('@aws-sdk/client-cloudformation');

const composeBucketDomain = (region, bucket) => {
  if (region === 'us-east-1') {
    return `https://${bucket}.s3.amazonaws.com`;
  }
  return `https://${bucket}.s3.${region}.amazonaws.com`;
}

(async function() {
try {
  let config = JSON.parse(fs.readFileSync('config.json'));
  const {region, bucket, stackName} = config.aws;
  const gitBranch = (await exec('git branch --show-current')).stdout.trim();
  const awsConfig = {
    region: config.aws.region,
    credentials: config.aws.credentials,
    maxRetries: 10
  };

  const s3 = new S3Client(awsConfig);
  const cf = new CloudFormationClient(awsConfig);

  const args = process.argv.slice(2);
  const action = args[0];

  const upload = async (prefix) => {
    await emptyBucket();
    await uploadDirectory('./src', prefix);
  }
  const uploadDirectory = async (path, prefix) => {
    const Bucket = config.aws.bucket;

    const walkSync = async function(currentDirPath, callback) {
      const proms = fs.readdirSync(currentDirPath).map(async function (name) {
        var filePath = currentDirPath + '/' + name;
        var stat = fs.statSync(filePath);
        if (stat.isFile()) {
          await callback(filePath, stat);
        } else if (stat.isDirectory()) {
          await walkSync(filePath, callback);
        }
      });
      return Promise.all(proms);
    }

    await walkSync(path, async function (filePath, stat) {
      let bucketPath = prefix + '/' + filePath.substring(path.length + 1);
      let params = {Bucket, Key: bucketPath, Body: fs.readFileSync(filePath)};
      await s3.send(new PutObjectCommand(params))
      console.log(`Uploaded file ${bucketPath}`);
    });
  }

  const emptyBucket = async () => {
    const Bucket = bucket;
    const Prefix = gitBranch + '/cf/';
    const response = await s3.send(new ListObjectsCommand({Bucket, MaxKeys: 1000, Prefix}));
    if (response.Contents?.length > 0) {
      const keys = response.Contents.map(object => ({Key: object.Key}));
      console.log(`Going to delete ${keys.length} objects`)
      await s3.send(new DeleteObjectsCommand({Bucket, Delete: {Objects: keys}}))
    }
  }
  if (action === 'delete') {
    const response = await cf.send(new DeleteStackCommand({
      StackName: stackName,
    }));
    console.log(`Requested to delete stack ${stackName}`)
  }
  if (action === 'start') {
    const prefix = `${gitBranch}/cf`;
    const lambdaPrefix = `${gitBranch}/lambda`;
    const CfTs = (new Date()).getTime() + '';
    await upload(prefix);
    const baseUrl = `${composeBucketDomain(region, bucket)}/${prefix}/`;
    const lambdaBaseUrl = `${composeBucketDomain(region, bucket)}/${lambdaPrefix}/`;
    const templateUrl = `${baseUrl}index.yaml`;
    console.log(`Going to create stack ${stackName} with template ${templateUrl}`)
    await cf.send(new CreateStackCommand({
      StackName: stackName,
      TemplateURL: templateUrl,
      Capabilities: config.aws.capabilities || [],
      OnFailure: 'DO_NOTHING',
      Parameters: [
        {ParameterKey: 'CfBaseUrl', ParameterValue: baseUrl},
        {ParameterKey: 'CfBucket', ParameterValue: config.aws.bucket},
        {ParameterKey: 'CfBranch', ParameterValue: gitBranch},
        {ParameterKey: 'CfTs', ParameterValue: CfTs},
        ...Object.keys(config.aws.parameters)
          .map(k => ({ParameterKey: k, ParameterValue: config.aws.parameters[k]}))
      ]
    }));
  }
  if (action === 'update') {
    const prefix = `${gitBranch}/cf`;
    const lambdaPrefix = `${gitBranch}/lambda`;
    const CfTs = (new Date()).getTime() + '';
    await upload(prefix);
    const baseUrl = `${composeBucketDomain(region, bucket)}/${prefix}/`;
    const lambdaBaseUrl = `${composeBucketDomain(region, bucket)}/${lambdaPrefix}/`;
    const templateUrl = `${baseUrl}index.yaml`;
    console.log(`Going to create stack ${stackName} with template ${templateUrl}`)
    await cf.send(new UpdateStackCommand({
      StackName: stackName,
      TemplateURL: templateUrl,
      Capabilities: config.aws.capabilities || [],
      Parameters: [
        {ParameterKey: 'CfBaseUrl', ParameterValue: baseUrl},
        {ParameterKey: 'CfBucket', ParameterValue: bucket},
        {ParameterKey: 'CfBranch', ParameterValue: gitBranch},
        {ParameterKey: 'CfTs', ParameterValue: CfTs},
        ...Object.keys(config.aws.parameters)
          .map(k => ({ParameterKey: k, ParameterValue: config.aws.parameters[k]}))
      ]
    }));

  }
} catch (e) {
  console.log(e);
}
})();
