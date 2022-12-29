// 1834. Single-Threaded CPU

// You are given n​​​​​​ tasks labeled from 0 to n - 1 represented by a 2D integer array tasks, where tasks[i] = [enqueueTimei, processingTimei] means that the i​​​​​​​​​​​th​​​​ task will be available to process at enqueueTimei and will take processingTimei to finish processing.

// You have a single-threaded CPU that can process at most one task at a time and will act in the following way:

// If the CPU is idle and there are no available tasks to process, the CPU remains idle.
// If the CPU is idle and there are available tasks, the CPU will choose the one with the shortest processing time. If multiple tasks have the same shortest processing time, it will choose the task with the smallest index.
// Once a task is started, the CPU will process the entire task without stopping.
// The CPU can finish a task then start a new one instantly.
// Return the order in which the CPU will process the tasks.

const getOrder = function (tasks) {
  const result = [];
  const sortedTasks = tasks
    .map((task, index) => {
      return {
        index,
        enqueueTime: task[0],
        processingTime: task[1],
      };
    })
    .sort((a, b) => {
      if (a.enqueueTime === b.enqueueTime) {
        return a.processingTime - b.processingTime;
      }
      return a.enqueueTime - b.enqueueTime;
    });

  for (let i = 0; i < sortedTasks.length; i++) {
    const task = sortedTasks[i];
    if (task.enqueueTime > 0) {
      result.push(task.index);
    }
  }

  return result;
};

console.log(
  getOrder([
    [1, 2],
    [2, 4],
    [3, 2],
    [4, 1],
  ])
);
