var http = require('http');
var map = require('through2-map');
var server = http.createServer(httpServer);
server.listen(Number(process.argv[2]));
function httpServer(req, res)
{
	if (req.method != 'POST')
	{
		return res.end('Please send me a POST!');
	}
	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase();
	})).pipe(res);
}
