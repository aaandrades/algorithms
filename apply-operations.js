// You are given a 0-indexed array nums of size n consisting of non-negative integers.
// You need to apply n - 1 operations to this array where, in the ith operation (0-indexed), 
// you will apply the following on the ith element of nums:

// If nums[i] == nums[i + 1], then multiply nums[i] by 2 and set nums[i + 1] to 0. Otherwise, you skip this operation.
// After performing all the operations, shift all the 0's to the end of the array.

// For example, the array [1,0,2,0,0,1] after shifting all its 0's to the end, is [1,2,1,0,0,0].
// Return the resulting array.

// Note that the operations are applied sequentially, not all at once.

const applyOperations = (nums) => {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      nums[i] *= 2;
      nums[i + 1] = 0;
    }
  }

  const nonZeroes = nums.filter((value) => !!value);
  const zeroes = nums.filter((value) => value === 0);
  return nonZeroes.concat(zeroes);
};

console.log(applyOperations([1, 2, 2, 1, 1, 0]));
console.log(applyOperations([0, 1]));
console.log(
  applyOperations([
    847, 847, 0, 0, 0, 399, 416, 416, 879, 879, 206, 206, 206, 272,
  ])
);
