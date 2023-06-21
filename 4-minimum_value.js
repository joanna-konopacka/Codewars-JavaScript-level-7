function removeSmallest(numbers) {
	const minIndex = numbers.indexOf(Math.min(...numbers));
	return numbers.filter((el, index) => index !== minIndex);
}

/*function removeSmallest(numbers) {
	const newNumbers = numbers.sort((a, b) => a - b);
	return newNumbers.filter((el) => newNumbers.indexOf(el) !== 0);
}

Sort() - zmienia-porządkuje oryginalną tablicę
*/
