function drawStairs(n) {
	let stairs = "";

	for (let i = 0; i < n; i++) {
		// Dodajemy spacje przed literą "I" w każdym wierszu, zależnie od numeru wiersza
		stairs += " ".repeat(i) + "I";

		// Dodajemy nową linię po każdym wierszu (oprócz ostatniego)
		if (i !== n - 1) {
			stairs += "\n";
		}
	}

	return stairs;
}
