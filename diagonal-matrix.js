// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

const findDiagonalDifference = (arr) => {
  let difference = 0;
  let leftDiagonal = 0;
  let rightDiagonal = 0;

  let order = arr.length;
  for (let i = 0; i < order; i++) {
    for (let j = 0; j < order; j++) {
      if (j === 0) leftDiagonal += arr[i][j + i];
      if (j === order - 1) rightDiagonal += arr[i][j - i];
    }
  }

  difference = Math.abs(leftDiagonal - rightDiagonal);
  return difference;
};

const matrix3 = [
  [1, 2, 3],
  [4, 5, 6],
  [9, 8, 9],
];
const matrix4 = [
  [1, 2, 3, 4],
  [4, 5, 6, 3],
  [9, 8, 9, 5],
  [9, 8, 9, -1],
];

findDiagonalDifference(matrix3); // 2
findDiagonalDifference(matrix4); // 13
