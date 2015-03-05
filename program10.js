var net = require('net');
var server = net.createServer(netServer);
server.listen(Number(process.argv[2]));
function netServer(socket)
{
	var output = "";
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth()+1;
	if (Number(month) < 10)
		month = "0" + month;
	var da = date.getDate();
	if (Number(da) < 10)
		da = "0" + da;
	var hours = date.getHours();
	if (Number(hours) < 10)
		hours = "0" + hours;
	var min = date.getMinutes();
	if (Number(min) < 10)
		min = "0" + min;
	output = year + '-' + month + '-' + da + ' ' + hours + ':' + min;
	socket.end(output + '\n');
}
