// BIG O
// O(n)

const minimunRounds = (tasks) => {
  if (tasks.length === 1) return -1;

  let accumNumbers = {};
  let rounds = 0;

  tasks.sort((a, b) => a - b);

  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i] === tasks[i + 1] || tasks[i] === tasks[i - 1]) {
      accumNumbers[tasks[i]] = accumNumbers[tasks[i]]
        ? accumNumbers[tasks[i]] + 1
        : 1;
    } else {
      return -1;
    }
  }

  for (let j in accumNumbers) {
    rounds += Math.ceil(accumNumbers[j] / 3);
  }

  return rounds;
};

console.log(minimunRounds([2, 2, 3, 3, 2, 4, 4, 4, 4, 4])); // 4
console.log(minimunRounds([2, 3, 3])); // -1
