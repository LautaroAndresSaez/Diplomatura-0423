const nombres = [
  "Lautaro", // callback(Laturo) -> L
  "Mariano",
  "Alejandra",
  "Alfonso",
  "Cristian",
  "Federico",
  "Ignacio",
  "Matias",
  "Enrico",
];

/* 
Lo que quiero: 
  ["L", "M", "A", "A", "C", "F", "I", "M", "E"]
*/

const primerasLetras = nombres.map((nombre) => {
  return nombre[0];
});

console.log(primerasLetras);

const fs = require("fs");
const usuariosString = fs.readFileSync("./usuarios.json");
const usuarios = JSON.parse(usuariosString);

const emails = usuarios.map((usuario) => {
  return usuario.email;
});

function buscarEmails(usuarios) {
  const emails = [];
  for (let i = 0; i < usuarios.length; i++) {
    const email = usuarios[i].email;
    emails.push(email);
  }
  return emails;
}

console.log(emails);
