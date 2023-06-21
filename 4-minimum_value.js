function removeSmallest(numbers) {
	const minIndex = numbers.indexOf(Math.min(...numbers));
	return numbers.filter((el, index) => index !== minIndex);
}

/*function removeSmallest(numbers) {
	const newNumbers = numbers.sort((a, b) => a - b);
	return newNumbers.filter((el) => newNumbers.indexOf(el) !== 0);
}
Sort() - zmienia-porządkuje oryginalną tablicę



Ciekawe rozwiązanie:
function removeSmallest(numbers) {
  numbers = numbers.slice(0); (kopiuje tablicę zatem nie zmienia)
  const min = Math.min(...numbers);
  numbers.splice(numbers.indexOf(min), 1);
  return numbers;
}

*/
f