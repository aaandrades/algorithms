// Given an array of integers, calculate the ratios of its elements that are positive, negative,
// and zero. Print the decimal value of each fraction on a new line with  places after the decimal.

const getRatio = (arr) => {
  let positiveCount = 0;
  let negativeCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positiveCount++;
    } else if (arr[i] < 0) {
      negativeCount++;
    } else {
      zeroCount++;
    }
  }
  console.log((positiveCount / arr.length).toFixed(4));
  console.log((negativeCount / arr.length).toFixed(4));
  console.log((zeroCount / arr.length).toFixed(4));
};

getRatio([1, 1, 0, -1, -1]);
