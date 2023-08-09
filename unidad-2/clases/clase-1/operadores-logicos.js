const a = 5;
const b = 15;
const nombre = "agus";

const esMayor = a > 5;
const esMenor = b < 14;
const esMayorOIgual = a >= 4;
const esMenorOIgual = a <= 4;

const seLlamaAgus = nombre == "Agus";

const noSeLLamaDamian = nombre != "damian";

const esIgual = 5 == "5";
const esIgualEstricto = 5 === "5";
console.log("==", esIgual);
console.log("===", esIgualEstricto);

const esDistinto = 5 != "5";
const esDistintoDeFormaEstricta = 5 !== "5";
console.log("!=", esDistinto);
console.log("!==", esDistintoDeFormaEstricta);
