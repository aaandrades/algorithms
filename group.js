// Given a 2D Array 6X6:
// Find the hourglasses in array
// Return the max sum or an hourglass

const arrays = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const arrays2 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const hourglassSum = (arr) => {
  let sum = [];
  for (let i = 0; i <= arr.length - 3; i++) {
    for (let j = 0; j <= arr[i].length - 3; j++) {
      let tempSum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2];
      sum.push(tempSum);
    }
  }
  return Math.max(...sum);
};

console.log(hourglassSum(arrays2)); // 28
console.log(hourglassSum(arrays)); // 19
