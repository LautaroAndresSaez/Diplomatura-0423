const saludar = require("./funciones/saludar");

//console.log(process.argv);
const nombre = process.argv[2];
const edad = Number(process.argv[3]);
const altura = Number(process.argv[4]);

console.log(saludar(nombre, edad));

//console.log("Hola " + nombre + " medis: " + altura + "cm");
//console.log(`Hola ${nombre}, medis: ${altura / 100}m`);
