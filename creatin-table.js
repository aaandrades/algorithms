// There are too many letters from children asking for gifts and it is very difficult that we can inventory all of them.
// That's why we have decided to create a program that draws us a table with the gifts we ask for and their quantities.
// For this we are given an array of objects with the names of the gifts and their quantities.
// Write a function that receives this array and returns a string with the drawn table.

// printTable([
//   { name: "Game", quantity: 2 },
//   { name: "Bike", quantity: 1 },
//   { name: "Book", quantity: 3 },
// ]);

/*
+++++++++++++++++++
| Gift | Quantity |
| ---- | -------- |
| Game | 2        |
| Bike | 1        |
| Book | 7        |
*******************
*/

// printTable([
//   { name: "PlayStation 5", quantity: 9234782374892 },
//   { name: "Book Learn Web Dev", quantity: 23531 },
// ]);

const printTable = (gifts) => {
  let titleLength = "Gift".length;
  let quantityLength = "Quantity".length;
  let body = "";

  // Get the width
  gifts.forEach((gift) => {
    if (gift.name.length > titleLength) {
      titleLength = gift.name.length;
    }
    const quantity = +gift.quantity.toString().length;
    if (quantity > quantityLength) {
      quantityLength = quantity;
    }
  });

  // Build the body
  gifts.forEach((gift) => {
    const { name, quantity } = gift;

    body += `| ${name}${" ".repeat(
      titleLength - +name.length
    )} | ${quantity}${" ".repeat(
      quantityLength - +quantity.toString().length
    )} |\n`;
  });

  let totalLength = titleLength + quantityLength + 7;

  let topBar = "+".repeat(totalLength);
  let bottomBar = "*".repeat(totalLength);

  let title = `| Gift${" ".repeat(titleLength - 4)} | Quantity${" ".repeat(
    quantityLength - 8
  )} |`;
  let division = `| ${"-".repeat(titleLength)} | ${"-".repeat(
    quantityLength
  )} |`;

  return `${topBar}\n${title}\n${division}\n${body}${bottomBar}`;
};

const gifts = [
  { name: "Game", quantity: 4 },
  { name: "Bike", quantity: 1 },
  { name: "Book", quantity: 3 },
];

console.log(printTable(gifts));
