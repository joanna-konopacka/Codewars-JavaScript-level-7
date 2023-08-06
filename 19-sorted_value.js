const solution = (nums) => (nums ? nums.sort((a, b) => a - b) : []);

/*
function solution(nums) {
	return nums === null || nums.length === 0
		? []
		: [...nums].sort((a, b) => a - b);
}
*/
