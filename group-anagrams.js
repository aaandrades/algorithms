const groupAnagrams = (strs) => {
  let hashMap = {};
  let results = [];

  for (let i = 0; i < strs.length; i++) {
    const sortedWord = strs[i].split("").sort().join("");

    if (!hashMap[sortedWord]) {
      hashMap[sortedWord] = [];
    }
    hashMap[sortedWord].push(strs[i]);
  }

  for (let j in hashMap) results.push(hashMap[j]);

  return results;
};

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs)); // [ [ 'eat', 'tea', 'ate' ], [ 'tan', 'nat' ], [ 'bat' ] ]
