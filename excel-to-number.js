const titleToNumber = (title) => {
  const letters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  if (title.length === 1) {
    return letters.indexOf(title) + 1;
  }

  let sum = 0;
  for (let i in title) {
    if (+i === title.length - 1) {
      console.log("FINAL: ", title[i]);
      sum += letters.indexOf(title[i]) + 1;
      return sum;
    }
    console.log(title[i]);
    console.log(letters.indexOf(title[i]));
    sum += (letters.indexOf(title[i]) + 1) * 26;
    console.log(5 * 26);
    console.log(sum);
  }
};
// console.log(titleToNumber("FXSHRXW"));
console.log(titleToNumber("ZY"));
// 16382

const titleToNumber2 = (columnTitle) => {
  let corresponding_number = 0;
  for (let i = 0; i < columnTitle.length; i++) {
    const current_letter = columnTitle[i]; // current Letter
    const current_number = current_letter.charCodeAt(0) - 64; // corresponding number
    // here we are subtracting 64 because we aer going to get only Capital letter so the charCodeAt() returns the ASCII value of the character.
    corresponding_number +=
      current_number * Math.pow(26, columnTitle.length - i - 1);
  }
  return corresponding_number;
};
