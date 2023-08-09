const sumar = require("./funciones/sumar");
const restar = require("./funciones/restar");
const dividir = require("./funciones/dividir");
const multiplicar = require("./funciones/multiplicar");
const help = require("./funciones/help");
const comando = process.argv[2];
const a = Number(process.argv[3]);
const b = Number(process.argv[4]);

let resultado;

if (comando === "sumar") {
  resultado = sumar(a, b);
} else if (comando === "restar") {
  resultado = restar(a, b);
} else if (comando === "multiplicar") {
  resultado = multiplicar(a, b);
} else if (comando === "dividir") {
  resultado = dividir(a, b);
} else {
  help();
}

if (resultado) {
  console.log(`El resultado de ${comando} a=${a} y b=${b} es: ${resultado}`);
}
