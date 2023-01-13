// Given two strings s and t, return true if s is a subsequence of t,
// or false otherwise.
// A subsequence of a string is a new string that is formed from the
//  original string by deleting some (can be none) of the characters
// without disturbing the relative positions of the remaining characters.
// (i.e., "ace" is a subsequence of "abcde" while "aec" is not).

const isSubsequence = function (s, t) {
  // S en T

  if (s.length > t.length) return false;

  const sMap = new Map();
  for (let j in s) sMap.set(j, s[j]);

  let lastIndex = 0;
  for (let i in t) {
    if (t[i] === s[lastIndex]) lastIndex++;
  }

  return lastIndex === s.length;
};

console.log(isSubsequence("abc", "ahbgdc"));
console.log(isSubsequence("axc", "ahbgdc"));
console.log(isSubsequence("aec", "abcde"));
console.log(isSubsequence("acb", "ahbgdc"));
