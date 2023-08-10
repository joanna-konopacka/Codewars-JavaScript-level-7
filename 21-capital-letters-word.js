const capitals = (word) => {
	const capitalIndexes = [];
	[...word].forEach((char, index) => {
		if (char === char.toUpperCase()) {
			capitalIndexes.push(index);
		}
	});
	return capitalIndexes;
};

/*
const capitals = function (word) {
	const capitalIndexes = [];
	for (let i = 0; i < word.length; i++) {
		if (word[i] === word[i].toUpperCase()) {
			capitalIndexes.push(i);
		}
	}
	return capitalIndexes;
};
*/

//input: "CodEWaRs" --> [0,3,4,6]
