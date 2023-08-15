const fs = require("fs");

const usuariosString = fs.readFileSync("./usuarios.json", "utf-8");
const usuariosJSON = JSON.parse(usuariosString);

console.log(usuariosJSON);

const saludo = fs.readFileSync("./saludo.txt", "utf-8");

console.log(saludo);

fs.writeFileSync("./mi-nombre.txt", "Fede");
