var http = require('http');
var bl = require('bl');

http.get(process.argv[2], httpResponse);

function httpResponse(response)
{
	response.pipe(bl(processData));
	/*response.setEncoding('utf8');
	response.on('data',console.log);
	response.on('error',console.error);*/
}

function processData(err, data)
{
	if (err) return err;
	console.log(data.toString().length);
	console.log(data.toString());
}