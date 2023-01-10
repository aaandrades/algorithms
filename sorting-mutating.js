// Given an integer array nums, move all 0's to the end of it while
// maintaining the relative order of the non-zero elements.
// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example 2:
// Input: nums = [0]
// Output: [0]

const moveZeroes = (nums) => {
  const zeros = nums.filter((n) => n === 0);
  const nonZeros = nums.filter((n) => n !== 0);
  nums.length = 0;
  Array.prototype.push.apply(nums, nonZeros.concat(zeros));
  return nums;
};

console.log(moveZeroes([0, 0, 1]));
