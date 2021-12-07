// ¡Es hora de poner el árbol de navidad en casa! 🎄
// Para ello vamos a crear una función que recibe la altura del árbol,
// que será un entero positivo del 1 a, como máximo, 100.
// Si le pasamos el argumento 5, se pintaría esto:

// // ______*______      1
// // _____***_____      2
// // ____*****____      3
// // ___*******___      4
// // __*********__      5
// // _***********_      6
// // *************      7

// // _____*_____      1
// // ____***____      2
// // ___*****___      3
// // __*******__      4
// // _*********_      5
// // ***********      6

// // 5=5+4
// // 4=4+3
// // 3=3+2
// // a = a+(a-1);

// Creamos un triángulo de asteríscos * con la altura proporcionada y, a los lados, usamos el guión bajo _ para los espacios. Es muy importante que nuestro árbol siempre tenga la misma longitud por cada lado.
// Todos los árboles, por pequeños o grandes que sean, tienen un tronco de dos líneas de #.

function createXmasTree(n) {
    let tree;
  
    for (let index = 1; index <= n; index++) {
      let buildRow = "";
  
      if (index < n) {
        buildRow = `${"_".repeat(n - index)}${"*".repeat(
          index * 2 - 1
        )}${"_".repeat(n - index)}`;
      }
  
      if (index === n) {
        buildRow = "*".repeat(2 * n - 1);
      }
  
      tree = !tree ? buildRow : tree + "\n" + buildRow;
    }
  
    const buildGround = `\n${"_".repeat(n - 1)}${"#"}${"_".repeat(n - 1)}`.repeat(2);
  
    return tree + buildGround;
  }
  
  console.log(createXmasTree(4));
  