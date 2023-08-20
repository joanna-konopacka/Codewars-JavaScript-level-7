/*
On Bob's desk, there are stones arranged in a row, next to each other, in three colors: red (R), green (G), and blue (B). Help Bob determine the minimum number of stones that need to be removed from the table so that each stone neighbors a stone of a different color.
*/

function minRemovalsToAlternate(s) {
	if (s.length === 0) {
		return 0;
	}

	let removals = 0;

	for (let i = 1; i < s.length; i++) {
		if (s[i] === s[i - 1]) {
			removals++;
		}
	}

	return removals;
}
