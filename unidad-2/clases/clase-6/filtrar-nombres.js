const nombres = [
  "Lautaro",
  "Mariano",
  "Alejandra",
  "Alfonso",
  "Cristian",
  "Federico",
  "Ignacio",
  "Matias",
  "Enrico",
];

const filtrarNombres = (valor) => {
  const nombresFiltrados = [];
  for (let i = 0; i < nombres.length; i++) {
    const nombre = nombres[i]; // i = 0 -> Lautaro ; i = 1 -> Mariano
    if (nombre.includes(valor)) {
      nombresFiltrados.push(nombre);
    }
  }
  return nombresFiltrados;
};

console.log(filtrarNombres("ico"));
console.log(filtrarNombres("a"));
