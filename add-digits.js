// Given an integer num, repeatedly add all its digits until the
// result has only one digit, and return it.

/*
Input: num = 38
Output: 2
Explanation: The process is
38 --> 3 + 8 --> 11
11 --> 1 + 1 --> 2 
Since 2 has only one digit, return it.
*/

const addDigits = (num) => {
  if (+num < 10 && +num > -10) return num;

  const digits = num.toString().split("");
  const sumDigits = digits.reduce((acc, current) => (acc += +current), 0);
  return addDigits(sumDigits);
};

console.log(addDigits(38));

// BIG O
// O(log n)
