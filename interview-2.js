// Given five positive integers, find the minimum and maximum values that can be calculated
// by summing exactly four of the five integers.  Then print the respective minimum and maximum
// values as a single line of two space-separated long integers.

const getSum = (arr) => {
  const newArr = arr.sort((a, b) => a - b);

  const minArray = newArr.slice(0, 4);
  const maxArray = newArr.slice(newArr.length - 4);

  console.log(
    minArray.reduce((prev, current) => prev + current),
    maxArray.reduce((prev, current) => prev + current)
  );
};

getSum([1, 3, 5, 7, 9, 4, 32, 8]); // 13 56
