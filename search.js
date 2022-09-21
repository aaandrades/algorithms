// Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el
// almacén hecho un desastre y no encuentra nada. Vamos a crear una función contains que
// recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
// La función debe devolver un booleano que indique si se encuentra el string como valor
// en algún nivel del objeto. Veamos unos ejemplos:

const almacen = {
  estanteria1: {
    cajon1: {
      producto1: "coca-cola",
      producto2: "fanta",
      producto3: "sprite",
      cajon2: {
        producto1: "pantalones",
        producto2: "muestra",
      },
    },
  },
  estanteria2: {
    cajon1: "vacio",
    cajon2: {
      producto1: "pantalones",
      producto2: "camiseta",
    },
  },
};

const contains = (store, product) => {
  let coincidence = false;
  Object.keys(store).forEach((key) => {
    if (!coincidence) {
      if (typeof store[key] === "object") {
        coincidence = contains(store[key], product);
      } else {
        coincidence = store[key] === product;
      }
    }
  });
  return coincidence;
};

contains(almacen, "muestra"); // true
contains(almacen, "no-value"); // false
