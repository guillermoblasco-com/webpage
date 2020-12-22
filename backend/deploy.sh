awsProfile=$(jq -cMr .aws.profile config.json)
s3Bucket=$(jq -cMr .aws.lambdaS3Bucket config.json)
cd $1
buildDir=build
branch=$(git branch --show-current)
lambdaName=$(jq -cMr .lambdaName package.json)
s3Key="$branch"/lambda/"${lambdaName}".zip
rm -rf ${buildDir}
rm -rf node_modules
npm install --production --quiet
mkdir ${buildDir}
cp package.json ${buildDir}/
cp package-lock.json ${buildDir}/
cp -r src ${buildDir}/
cp -r node_modules ${buildDir}/
cd ${buildDir}
zip -rq ../build.zip *
cd ..
rm -r ${buildDir}
echo "Uploading code to bucket ${s3Bucket} with key ${s3Key}"
aws --profile ${awsProfile} s3 cp build.zip s3://"${s3Bucket}"/"${s3Key}"
rm -r build.zip
aws --profile ${awsProfile} lambda get-function --function-name ${lambdaName}
retVal=$?
if [ $retVal -ne 0 ]; then
    echo "Lambda not found, therefore not deploying the code to lambda"
    exit 0
fi
aws --profile ${awsProfile} \
  lambda update-function-code \
  --function-name ${lambdaName} \
  --s3-bucket ${s3Bucket} \
  --s3-key ${s3Key} \
  --publish
cd ..
