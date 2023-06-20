function toDayOfYear(arr) {
	const [day, month, year] = arr;
	const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
	const leapYear = year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);

	let countDaysInMonths = 0;
	let countDaysInYear = 0;
	for (let i = 0; i < month - 1; i++) {
		countDaysInMonths += months[i];
	}
	countDaysInYear = day + countDaysInMonths;
	return leapYear && month > 2 ? countDaysInYear + 1 : countDaysInYear;
}

//const [day, month, year] = arr -destrukturyzacja

/*
function toDayOfYear(arr) {
  for (var i = 1; i < arr[1]; i++)
    arr[0] += new Date(arr[2], i, 0).getDate();
  return arr[0];
}
*/
