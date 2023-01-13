// You are given two strings s and t.
// String t is generated by random shuffling string s and then add one more letter at a random position.
// Return the letter that was added to t.

const sSort = s.split("").sort();
const tSort = t.split("").sort();
for (let i in tSort) {
  if (sSort[i] !== tSort[i]) {
    return tSort[i];
  }
}
return "";