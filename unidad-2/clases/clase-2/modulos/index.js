const saludar = require("./saludar");

const alumno = {
  "id-user": 0,
  nombre: "Julian",
  tecnologias: ["JS", "CSS", "HTML"],
  rol: "Delegado",
  preguntar() {
    return "Pregunta...";
  },
};

const alumno2 = {
  "id-user": 1,
  nombre: "Mati",
  tecnologias: ["JS", "CSS", "HTML"],
  rol: "Administrador de WP",
  preguntar() {
    return "Pregunta...";
  },
};
const alumno3 = {
  "id-user": 2,
  nombre: "Alfonso",
  tecnologias: ["JS", "CSS", "HTML"],
  rol: "Administrador de WP",
  preguntar() {
    return "Pregunta...";
  },
};

const alumnos = [alumno, alumno2, alumno3];
const saludos = [];

//alumnos[indice -> i]

for (let i = 0; i < alumnos.length; i++) {
  const saludo = saludar(alumnos[i].nombre);
  saludos.push(saludo);
}

console.log(saludos);
