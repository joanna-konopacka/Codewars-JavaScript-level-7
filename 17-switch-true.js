function findCalculationType(a, b, c) {
	let result;

	switch (true) {
		case a + b === c:
			result = "addition";
			break;
		case a - b === c || b - a === c:
			result = "subtraction";
			break;
		case a * b === c:
			result = "multiplication";
			break;
		case a / b === c || b / a === c:
			result = "division";
			break;
		default:
			result = "Unknown operation";
	}

	return result;
}
