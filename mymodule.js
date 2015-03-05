var fs = require('fs');
var extension = "";
module.exports = function (dir, ext, callback)
{
	return fs.readdir(dir, callback);
	extension = ext;
};

function showFiles(err, list)
{
	if (err) return err;
	for (count = 0; count < list.length; count++)
	{
		if (list[count].indexOf('.' + extension) != -1)
		{
			console.log(list[count]);
		}
	}
}

