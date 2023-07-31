function canTheyBook(adultsCount = 0, childrenCount = 0) {
	if (adultsCount + childrenCount > 8) {
		return false;
	}

	if (adultsCount < 1) {
		return false;
	}

	if (childrenCount > 0 && adultsCount < childrenCount / 2) {
		return false;
	}

	return true;
}
