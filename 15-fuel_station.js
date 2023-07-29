function makeDecision(fuelRemaining, distance, fuelConsumption) {
	if (
		typeof fuelRemaining !== "number" ||
		typeof distance !== "number" ||
		typeof fuelConsumption !== "number" ||
		fuelRemaining < 0 ||
		distance < 0 ||
		fuelConsumption <= 0
	) {
		return "please, enter the valid data";
	}

	const fuelNeeded = (distance / 100) * fuelConsumption;

	if (fuelRemaining >= fuelNeeded) {
		return "reach gas station by themselves";
	} else {
		return "ask for help";
	}
}

