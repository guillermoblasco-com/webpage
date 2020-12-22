# Backend

The backend lambdas, right now just that.

## Deploy

Run `bash deploy.sh dirname` to deploy one lambda. It uploads the code to S3 and if the
declared lambda exists it updates the lambda code.

## Configuration

It is expected a `config.json` file in the backend directory with the aws profile 
and s3 bucket to use:
```json
{
  "aws": {
    "profile": "your_profile",
    "lambdaS3Bucket": "your_deployment_bucket"
  }
}
```
