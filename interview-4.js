// Find the median value of an array

const findMedian = (arr) => {
  const newSorted = arr.sort((a, b) => a - b);
  const median = Math.floor(newSorted.length / 2);
  return newSorted[median];
};

findMedian([5, 3, 1, 2, 4]);
