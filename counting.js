function listGifts(carta) {
  const findWords = carta.split(" ");
  const filteredList = findWords.filter(
    (word) => word.split("_").length === 1 && word !== ""
  );
  const regulatedList = filteredList.map((word) => word.toLowerCase());

  let list = {};

  regulatedList.forEach((item) => {
    list =
      list[item] !== undefined
        ? { ...list, [item]: list[item] + 1 }
        : { ...list, ...{ [item]: 1 } };
  });

  return list;
}

const carta =
  "bici coche  coche balón _playstation bici coche peluche     peluche peluche peluche";

console.log(listGifts(carta));
