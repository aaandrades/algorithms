// Con la emoción, ya estamos empezando a contar los días del calendario hasta el 25 de diciembre 📆.
// Para ayudar a esto, vamos a crear una función que pasándole una instancia de Date nos diga el número de días que faltan.

export default function daysToXmas(date) {
  const xMasDay =
    date.getHours() > 12
      ? new Date("Dec 25, 2021 23:59:59")
      : new Date("Dec 25, 2021");

  const difference = xMasDay.getTime() - date.getTime();

  return Math.round(difference / (1000 * 3600 * 24));
}

const date1 = new Date("Dec 1, 2021");
daysToXmas(date1); // 24
const date2 = new Date("Dec 24, 2021 00:00:01");
daysToXmas(date2); // 1
const date3 = new Date("Dec 24, 2021 23:59:59");
daysToXmas(date3); // 1
const date4 = new Date("December 20, 2021 03:24:00");
daysToXmas(date4); // 5
