// We define super digit of an integer  using the following rules:
// Given an integer, we need to find the super digit of the integer.

// If  has only  digit, then its super digit is .
// Otherwise, the super digit of  is equal to the super digit of the sum of the digits of .
// For example, the super digit of  will be calculated as:

// 	super_digit(9875)   9+8+7+5 = 29
// 	super_digit(29) 	2 + 9 = 11
// 	super_digit(11)		1 + 1 = 2
// 	super_digit(2)		= 2

const getSuperDigit = (arrNumbers) => {
  let summation = 0;

  for (let i = 0; i < arrNumbers.length; i++) {
    summation += Number(arrNumbers[i]);
  }

  if (summation.toString().split("").length > 1) {
    return getSuperDigit(summation.toString().split(""));
  }

  return summation;
};

const superDigit = (n, k) => {
  const initialNumber = n.toString().repeat(k);
  const arrNumbers = initialNumber.split("");
  const a = getSuperDigit(arrNumbers);
  return a;
};

console.log(superDigit(9875, 4)); // 8
console.log(superDigit(148, 3)); // 3
