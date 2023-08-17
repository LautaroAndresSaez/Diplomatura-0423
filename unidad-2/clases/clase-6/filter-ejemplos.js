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

//ico

const filtrarNombres = (valor) => {
  return nombres.filter((nombre) => nombre.includes(valor));
};

const nombresFiltrados = nombres.filter((nombre) => {
  console.log(nombre, nombre.includes("ico"));
  return nombre.includes("ico");
});

console.log(nombresFiltrados);
