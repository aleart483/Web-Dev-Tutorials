function main() {
	echo('Echo!!!', 10);
	echo('Tater Tots', 3);
}

function echo(str, n) {
	for (let i = 0; i < n; i++) {
		console.log(str);
	}
}

main();
