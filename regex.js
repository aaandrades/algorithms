// El Grinch está abriendo las cartas que iban a Santa Claus y las está dejando hechas un lío. 😱
// Las cartas son una cadena de texto que incluyen regalos y paréntesis ().
// Para saber si una carta es válida ✅, debes comprobar que los paréntesis cierran correctamente y que, además, no vayan vacíos.
// ¡Pero ojo! Porque el Grinch ha dejado llaves { y corchetes [ dentro de los paréntesis que hacen que no sean válidas. 
// Por suerte sólo los ha dejado en medio de los paréntesis...
// Ejemplos:

// "bici coche (balón) bici coche peluche" // -> ✅
// "(muñeca) consola bici" // ✅

// "bici coche (balón bici coche" // -> ❌
// "peluche (bici [coche) bici coche balón" // -> ❌
// "(peluche {) bici" // -> ❌
// "() bici" // ❌

function isValid(letter) {
  const regex = /\((.*?)\)/g;
  const matches = letter.match(regex);

  if (!matches) return false;

  let response = true;
  matches.forEach((element) => {
    if (
      element.includes("{") ||
      element.includes("[") ||
      element.includes("()")
    ) {
      response = false;
    }
  });
  return response;
}

const example = "bici coche (balón bici coche";
const example2 = "(muñeca) consola bici";

console.log(isValid("(a() bici (a)"));
