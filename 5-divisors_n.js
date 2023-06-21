function getDivisorsCnt(n) {
	let divisors = 0;
	for (let i = 1; i <= Math.sqrt(n); i++) {
		if (n % i === 0) {
			if (i === n / i) {
				// Jeśli i jest pierwiastkiem kwadratowym n, trzeba dodać tylko jeden dzielnik
				divisors++;
			} else {
				// Trzeba dodać dwa dzielniki: i oraz n/i
				divisors += 2;
			}
		}
	}
	return divisors;
}
/*
function getDivisorsCnt(n) {
	let count = 0;
	for (let i = 1; i <= n; i++) {
		if (n % i === 0) {
			count++;
		}
	}
	return count;
}
*/
