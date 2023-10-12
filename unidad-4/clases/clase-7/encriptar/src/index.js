const bcrypt = require("bcrypt");
const ROUND = 10;

const password = "pepito123";
const passwordMalo1 = "Pepito123";
const passwordMalo2 = "123456789";

const passwordEncriptado = bcrypt.hashSync(password, ROUND);
const resultado1 = bcrypt.compareSync(password, passwordEncriptado);
console.log(password, resultado1);

const resultado2 = bcrypt.compareSync(passwordMalo1, passwordEncriptado);
console.log(passwordMalo1, resultado2);

const resultado3 = bcrypt.compareSync(passwordMalo2, passwordEncriptado);
console.log(passwordMalo2, resultado3);
