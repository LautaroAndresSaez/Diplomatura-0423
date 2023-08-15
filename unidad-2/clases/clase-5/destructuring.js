const { sumar } = require("./funciones/matematicas");
const gato = {
  nombre: "Gauss",
  edad: 7,
  come: true,
};

const { edad, nombre } = gato;
/*
const edad = gato.edad;
const nombre = gato.nombre;
*/

console.log("El gato tiene: ", edad);
console.log("El gato se llama: ", nombre);

console.log(sumar(2, 3));
