// A left rotation operation on an array shifts each of the array's elements  unit to the left.
// For example, if  left rotations are performed on array , then the array would become.
// Note that the lowest index item moves to the highest index in a rotation. This is called a circular array.
// Given an array  of  integers and a number, , perform  left rotations on the array.
// Return the updated array to be printed as a single line of space-separated integers.

const rotLeft = (a, d) => {
  let rotted = [];
  const initial = [...a].slice(0, d);
  const final = [...a].slice(d);
  rotted = [...final, ...initial];
  return rotted;
};

const resp1 = rotLeft([1, 2, 3, 4, 5], 4); // [5,1,2,3,4]
const resp2 = rotLeft(
  [41, 73, 89, 7, 10, 1, 59, 58, 84, 77, 77, 97, 58, 1, 86, 58, 26, 10, 86, 51],
  10
); // [77,97,58,1,86,58,26,10,86,51,41,73,89,7,10,1,59,58,84,77 ]
