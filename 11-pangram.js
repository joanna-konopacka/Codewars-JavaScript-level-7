function isPangram(string) {
	const cleanedString = string.replace(/[^a-zA-Z]/g, "");
	return [...new Set(cleanedString)].length >= 26 ? true : false;
}
