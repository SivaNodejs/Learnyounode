var newlinescount = 0;
var fs = require('fs');

fs.readdir(process.argv[2], showFiles);

function returnCount(err, data)
{
	if (err) {
		console.log(err);
		return err;
	}
	console.log(data.toString().split('\n').length-1);
}

function showFiles(err, list)
{
	for (count = 0; count < list.length; count++)
	{
		if (list[count].indexOf('.' + process.argv[3]) != -1)
		{
			console.log(list[count]);
		}
	}
}