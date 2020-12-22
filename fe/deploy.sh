Bucket=$(jq -cMr .aws.frontendS3Bucket config.json)
Profile=$(jq -cMr .aws.profile config.json)
echo 'Going to upload files'
aws --profile ${Profile} s3 rm s3://${Bucket}/ --recursive
aws --profile ${Profile} s3 cp ./out s3://${Bucket}/ --recursive
