
const hasExtension = /(.+)\.[a-zA-Z0-9]{2,5}$/;

exports.handler = async (event, context) => {
  const request = event.Records[0].cf.request;
  const url = request.uri;
  console.log(`Proccessing ${url}`)

  // if it's a post request and has not extension, add .html
  if (url && !url.match(hasExtension)) {
    request.uri = `${url}.html`;
  }

  return request;
}
