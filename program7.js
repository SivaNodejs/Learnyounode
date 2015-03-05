var http = require('http');

http.get(process.argv[2], httpResponse);

function httpResponse(response)
{
	response.setEncoding('utf8');
	response.on('data',console.log);
	response.on('error',console.error);
}