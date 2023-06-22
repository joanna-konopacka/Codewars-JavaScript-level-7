function SeriesSum(n) {
	let result = 0;
	for (let i = 0; i < n; i++) {
		result += 1 / (1 + 3 * i);
	}
	return n === 0 ? "0.00" : result.toFixed(2);
}
