var newlinescount = 0;
var fs = require('fs');

fs.readFile(process.argv[2], returnCount);

function returnCount(err, data)
{
	if (err) {
		console.log(err);
		return err;
	}
	console.log(data.toString().split('\n').length-1);
}