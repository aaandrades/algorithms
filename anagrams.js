// Big O = O(n)
const isAnagram = (s, t) => {
  if (t.length > s.length) return false;

  const mapAnagram = new Map();

  for (let letter of s) {
    mapAnagram.set(letter, (mapAnagram.get(letter) || 0) + 1);
  }

  for (let letter of t) {
    if (mapAnagram.get(letter)) {
      mapAnagram.set(letter, mapAnagram.get(letter) - 1);
    }
  }
  const nonEmpty = [...mapAnagram].filter((letter) => letter[1] !== 0);
  return nonEmpty.length === 0;
};

// Big O = O(n log n)
const isAnagram2 = (s, t) => {
  if (s.length !== t.length) {
    return false;
  }
  if (s.length === 1 && t === s) return true;

  const sortedSecondAnagram = t.split("").sort().join("");
  const sortedFirstAnagram = s.split("").sort().join("");

  return sortedSecondAnagram === sortedFirstAnagram;
};

console.log(isAnagram("a", "ab"));
