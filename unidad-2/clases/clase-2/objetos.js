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

const alumnos = [alumno, alumno2];
const llave = "id-user";
console.log(alumnos);

alumno.tecnologias.push("delegar");
console.log(alumno[llave]);
console.log(alumno.tecnologias[1]);
console.log(alumno.tecnologias);
console.log(alumno.preguntar());
