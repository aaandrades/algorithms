const firstUniqChar = (str) => {
  if (str.length === 1) return 0;

  let obj = {};
  for (let a of str) {
    if (!obj[a]) {
      obj[a] = 0;
    }
    obj[a]++;
  }

  for (let i = 0; i < str.length; ++i) {
    if (obj[str[i]] === 1) {
      return i;
    }
  }

  return -1;
};
