// Julius Caesar protected his confidential information by encrypting it using a cipher.
// Caesar's cipher shifts each letter by a number of letters. If the shift takes you past
// the end of the alphabet, just rotate back to the front of the alphabet. In the case of a rotation
// by 3, w, x, y and z would map to z, a, b and c.

// Original alphabet:      abcdefghijklmnopqrstuvwxyz
// Alphabet rotated +3:    defghijklmnopqrstuvwxyzabc

const isLowerCase = (letter) => {
  return letter === letter.toLowerCase();
};

const caesarCipher = (s, k) => {
  let encrypted = "";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  let rotatedPart = [];
  let restPart = [];

  if (s <= 26) {
    rotatedPart = alphabet.slice(0, s);
    restPart = alphabet.slice(s);
  } else {
    const intPart = Math.floor(s / alphabet.length);
    const residualPart = s - intPart * alphabet.length;
    rotatedPart = alphabet.slice(0, residualPart);
    restPart = alphabet.slice(residualPart);
  }
  const rotatedAlphabet = [...restPart, ...rotatedPart];

  const arrayText = k.split("");

  for (let i = 0; i < arrayText.length; i++) {
    let index = -1;

    // Condition only for upperCase
    if (!isLowerCase(arrayText[i])) {
      const upperAlphabet = alphabet.map((letter) => letter.toUpperCase());
      index = upperAlphabet.indexOf(arrayText[i]);
      encrypted = encrypted + rotatedAlphabet[index].toUpperCase();
    } else {
      index = alphabet.indexOf(arrayText[i]);

      if (index === -1) {
        encrypted = encrypted + arrayText[i];
      } else {
        encrypted = encrypted + rotatedAlphabet[index];
      }
    }
  }
  return encrypted;
};

console.log(caesarCipher(2, "middle-Outz")); // okffng-Qwvb
console.log(caesarCipher(75, "middle-Outz")); //jfaaib-Lrqw
