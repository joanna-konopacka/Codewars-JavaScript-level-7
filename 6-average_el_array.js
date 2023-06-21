function findAverage(array) {
	const avg = array.reduce((a, b) => a + b, 0) / array.length;
	return array.length === 0 ? 0 : avg;
}
