const longestPalindrome = function (s) {
  const letterCount = new Map();

  for (let i = 0; i < s.length; i++) {
    letterCount.set(s[i], (+letterCount.get(s[i]) || 0) + 1);
  }
  let longest = 0;
  let hasOdd = false;

  letterCount.forEach((letter) => {
    if (letter % 2 === 0) {
      longest += +letter;
    } else {
      longest += letter - 1;
      hasOdd = true;
    }
  });

  if (hasOdd) longest++;

  return longest;
};

console.log(longestPalindrome("abccccdd"));
console.log(longestPalindrome("a"));
console.log(longestPalindrome("Aa"));
