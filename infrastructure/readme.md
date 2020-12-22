# AWS intrastructure

The AWS infrastructure Cloudformation stack template files.

## Deploy

Run `node index.js start` to deploy first time. After the first deployment
`node index.js update` will update the stack.

## Configuration

It is expected a `config.json` file in the aws directory with the aws config:
```json
{
  "aws": {
    "region": "us-east-1",
    "bucket": "your_cf_bucket",
    "stackName": "Index",
    "credentials": {
      "accessKeyId": "",
      "secretAccessKey": ""
    },
    "capabilities": ["CAPABILITY_IAM", "CAPABILITY_AUTO_EXPAND", "CAPABILITY_NAMED_IAM"],
    "parameters": {
      "OpsEmail": "",
      "FrontendBucketName": "",
      "DomainName": "",
      "FrontendDomain": "",
      "DomainHostedZoneId": ""
    }
  }
}
```

The parameters are described in the `index.yaml` template
