// Reverse a phrase
const reverse = (p) => {
  return p.split("").reverse().join("");
};

console.log(reverse("Hello this is my content")); // tnetnoc ym si siht olleH

// Return all the managers given an ID
const getManager = (arr, id) => {
  const result = [];
  function findManager(employees, id) {
    const targetEmployee = employees.find((item) => item.employeeId === id);
    if (!targetEmployee) return;
    if (targetEmployee.managerId !== id) {
      result.push(targetEmployee.managerId);
      findManager(employees, targetEmployee.managerId);
    } else if (!result.includes(targetEmployee.managerId)) {
      result.push(targetEmployee.managerId);
    }
  }
  findManager(employees, id);
  return result;
};

const employees = [
  { employeeId: 11, name: "John", managerId: 11 },
  { employeeId: 50, name: "Todd", managerId: 73 },
  { mployeeId: 150, name: "Alex", managerId: 200 },
  { employeeId: 73, name: "Sara", managerId: 11 },
  { employeeId: 200, name: "Alex", managerId: 50 },
  { employeeId: 100, name: "Alex", managerId: 150 },
];

console.log(getManager(employees, 200));
