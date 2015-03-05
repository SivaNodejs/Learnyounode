var newlinescount = 0;
var mymod = require('./mymodule');

mymod(process.argv[2], process.argv[3], showFiles);

function showFiles(err, list)
{
	if (err) return err;
	for (count = 0; count < list.length; count++)
	{
		if (list[count].indexOf('.' + process.argv[3]) != -1)
		{
			console.log(list[count]);
		}
	}
}