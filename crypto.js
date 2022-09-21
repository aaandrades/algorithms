// Invertir en criptomonedas es casi un deporte de riesgo. El otro día hackearon Bitmart
// y ha hecho que el valor de Bitcoin, y otras monedas, bajase un 25%.
// Vamos a escribir una función que reciba la lista de precios de una criptomoneda
// en un día y debemos devolver la ganancia máxima que podríamos sacar si compramos y
// vendemos la inversión el mismo día. La lista de precios es un array de números y
// representa el tiempo de izquierda a derecha. Por lo que ten en cuenta que no puedes
// comprar a un precio que esté a la derecha de la venta y no puedes vender a un precio
// que esté a la izquierda de la compra.

const maxProfit = (prices) => {
  let difference = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      if (prices[j] - prices[i] > difference) {
        difference = prices[j] - prices[i];
      }
    }
  }
  return difference !== 0 ? difference : -1;
};

const pricesBtc = [39, 18, 29, 25, 34, 32, 5]; // 16
