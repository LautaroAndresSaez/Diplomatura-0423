function saludar(usuario) {
  return "Hola " + usuario;
}

const saludo = saludar("Mariano");
console.log(saludo);

const saludarArrow = (usuario) => {
  return "Hola " + usuario;
};

const saludarArrowCorto = (usuario) => "Hola " + usuario;

console.log(saludarArrow("Julian"));
console.log(saludarArrowCorto("Lautaro"));
