const nombre = "Ada";
const edad = 5;
const saludo = `Hola ${nombre}-${edad}, como andas? Tu edad es ${edad}`; //"Hola Ada-5, como andas? Tu edad es 5";

const saludar = (nombre, edad) =>
  `Hola ${nombre}, como andas? Tu edad es ${edad}`;

console.log(saludar("Julian", 26));
console.log(saludar("Lauti", 26));

console.log(saludo);
console.log(nombre[0]);
console.log(nombre.length);
console.log(nombre.toLowerCase());
console.log(nombre.toUpperCase());
console.log(nombre);

console.log("ada" === nombre.toLowerCase());
