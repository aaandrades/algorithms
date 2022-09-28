// Given an array of integers, where all elements but one occur twice, find the unique element.

const findUnique = (arr) => {
  let unique = 0;
  const sorted = arr.sort((a, b) => a - b);

  for (let i = 0; i < sorted.length; i++) {
    if (sorted[i] === sorted[i + 1]) {
      i++;
    } else {
      unique = sorted[i];
    }
  }
  console.log(unique);
  return unique;
};

findUnique([1, 2, 3, 4, 3, 2, 1]); // 4
findUnique([0, 0, 1, 2, 1]); // 2
