var http = require('http');
var fs = require('fs');
var server = http.createServer(httpServer);
server.listen(Number(process.argv[2]));
function httpServer(req, res)
{
	var fileContent = fs.createReadStream(process.argv[3]);
	return fileContent.pipe(res);
}
