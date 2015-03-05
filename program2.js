var total = 0;

for (count = 2; count < process.argv.length; count++) {
if ( count > 1)
	total += Number(process.argv[count]);
}

console.log(total);