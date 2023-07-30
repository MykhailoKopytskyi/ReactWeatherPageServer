const http = require("http");
const axios = require("axios");
const url = require("url");

http.createServer( async function( request, response ) {

  response.setHeader("Access-Control-Allow-Origin", "*");

  const URLparams = url.parse( request.url, true );
  const path = URLparams.pathname;
  const targetUrl = URLparams.query.sourceUrl;


  if( path == "/cities" && targetUrl ) {
    const cities = await getCities(targetUrl);
    response.end(cities);
  }
  else {
    response.end("404");
  }

} ).listen(4000)


async function getCities(url) {
  let result = await axios.get(url);
  let cities = result.data;
  let arr = JSON.stringify(cities)
  return arr;
}