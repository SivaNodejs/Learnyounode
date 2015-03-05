var newlinescount = 0;
var fs = require('fs');

var data = fs.readFileSync(process.argv[2]);
newlinecount = data.toString().split('\n').length-1;
console.log(newlinecount);