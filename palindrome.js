const isPalindrome = (str) => {
  const originalString = str.replace(/[^a-z0-9]/gi, "").toLowerCase();
  const inversalString = originalString.split("").reverse().join("");
  return originalString === inversalString;
};

console.log(isPalindrome("ab@a"));
