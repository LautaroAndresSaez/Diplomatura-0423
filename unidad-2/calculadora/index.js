const sumar = require("./funciones/sumar");
const dividir = require("./funciones/dividir");
const restar = require("./funciones/restar");
const multiplicar = require("./funciones/multiplicar");

const numero1 = 20;
const numero2 = 25;
const cero = 0;

const suma = sumar(numero1, numero2);
const resta = restar(numero1, numero2);
const division = dividir(numero1, numero2);
const divisionPorCero = dividir(numero1, cero);
const multiplicacion = multiplicar(numero1, numero2);

console.log(`${numero1} + ${numero2} = ${suma}`);
console.log(`${numero1} - ${numero2} = ${resta}`);
console.log(`${numero1} * ${numero2} = ${multiplicacion}`);
console.log(`${numero1} / ${numero2} = ${division}`);
console.log(`${numero1} / ${cero} = ${divisionPorCero}`);
