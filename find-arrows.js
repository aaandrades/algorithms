const findMinArrowShots = (points) => {
  let shots = 1;
  let previous = 0;

  // Big O = O(n log n) => Not good
  const sortedPoints = points.sort((a, b) => a[1] - b[1]);

  for (let i = 1; i < sortedPoints.length; i++) {
    if (sortedPoints[i][0] <= points[previous][1]) continue;
    shots++;
    previous = i;
  }
  return shots;
};

// console.log(
//   findMinArrowShots([
//     [2, 3],
//     [2, 3],
//   ])
// );
// console.log(
//   findMinArrowShots([
//     [1, 2],
//     [4, 5],
//     [1, 5],
//   ])
// );
// console.log(
//   findMinArrowShots([
//     [1, 2],
//     [3, 4],
//     [5, 6],
//     [7, 8],
//   ])
// );
// console.log(
//   findMinArrowShots([
//     [10, 16],
//     [2, 8],
//     [1, 6],
//     [7, 12],
//   ])
// );
console.log(
  findMinArrowShots([
    [1, 2],
    [2, 3],
    [3, 4],
    [4, 5],
  ])
);
