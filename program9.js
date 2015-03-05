var http = require('http');
var bl = require('bl');
var result= [];
var count = 0;
var indexVal = 0;

for (var i =0; i < 3; i++)
{
	httpGet(i);
}

function httpGet(index)
{
	//indexVal = index;
	http.get(process.argv[2+index], function(response)
	{
		response.pipe(bl(function (err,data)
		{
			if (err) return console.error(err);
			result[index] = data.toString();
			count++;
			if (count == 3)
				printResults();
		}));
	});
}

function processResponse(response)
{
	response.pipe(bl(processData));
}

function processData(err, data)
{
	if (err) return console.error(err);
	result[indexVal] = data.toString();
      count++;
    if (count == 3) 
      printResults();
}

function printResults()
{
	for (var i = 0; i < 3; i++)
	{
		console.log(result[i]);
	}
}