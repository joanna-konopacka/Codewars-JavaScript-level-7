function jumpingNumber(n) {
	const digits = n.toString().split("").map(Number);

	for (let i = 1; i < digits.length; i++) {
		if (Math.abs(digits[i] - digits[i - 1]) !== 1) {
			return "Not!!";
		}
	}
	return "Jumping!!";
}
