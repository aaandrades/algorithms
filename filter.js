// Find all sheeps of color red and contains N and A in the name
function contarOvejas(ovejas) {
    return (filtered = ovejas.filter(
      (oveja) =>
        oveja.color === "rojo" &&
        oveja.name.toLowerCase().includes("n") &&
        oveja.name.toLowerCase().includes("a")
    ));
  }
  
  const ovejas = [
    { name: "Noa", color: "azul" },
    { name: "Euge", color: "rojo" },
    { name: "Navidad", color: "rojo" },
    { name: "Ki Na Ma", color: "rojo" },
  ];
  
  console.log(contarOvejas(ovejas));
  