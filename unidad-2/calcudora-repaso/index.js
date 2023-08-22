const sumar = require("./funciones/sumar");
const restar = require("./funciones/restar");
const dividir = require("./funciones/dividir");

console.log("Hola mundo!");

const numero1 = 15;
const numero2 = 5;
const numero3 = 0;

const resultado = sumar(numero1, numero2);

console.log(`La suma de ${numero1} + ${numero2} es igual a ${resultado}`);

const resultadoDividirPorCero = dividir(numero1, 0);

console.log(resultadoDividirPorCero);

const resultadoDividir = dividir(numero1, numero2);

console.log(resultadoDividir);

console.log("Resultado de 2 - 3: ", restar(2, 3));
