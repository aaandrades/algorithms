const sorted = [11, 3, 9, 1];

const sortedBubble = (arr) => {
  let mutedArray = [...arr];

  for (let i = 0; i < mutedArray.length; i++) {
    for (let j = 0; j < mutedArray.length; j++) {
      if (mutedArray[j] > mutedArray[j + 1]) {
        const temp = mutedArray[j];
        mutedArray[j] = mutedArray[j + 1];
        mutedArray[j + 1] = temp;
      }
    }
  }
  return mutedArray;
};

console.log(sortedBubble(sorted));
