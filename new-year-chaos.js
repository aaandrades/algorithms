// It is New Year's Day and people are in line for the Wonderland rollercoaster ride. Each person wears
// a sticker indicating their initial position in the queue from  to . Any person can bribe the person
// directly in front of them to swap positions, but they still wear their original sticker. One person
// can bribe at most two others. Determine the minimum number of bribes that took place to get to a given
// queue order. Print the number of bribes, or, if anyone has bribed more than two people, print Too chaotic.

const swap = (arr, a, b) => {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

const getBribes = (q) => {
  let swapCount = 0;

  for (let i = q.length - 1; i >= 0; i--) {
    // filter which items are bribed
    if (q[i] !== i + 1) {
      if (i - 1 >= 0 && q[i - 1] == i + 1) {
        swapCount++;
        swap(q, i, i - 1);
      } else if (i - 2 >= 0 && q[i - 2] === i + 1) {
        swapCount += 2;
        swap(q, i - 2, i - 1);
        swap(q, i - 1, i);
      } else {
        console.log("Too chaotic");
        return;
      }
    }
  }
  console.log(swapCount);
};

console.log(getBribes([1, 2, 5, 3, 7, 8, 6, 4]));
