const express = require("express");
const db = require("./db");
const AlumnosModel = require("./models/alumnos.model");
const CursosModel = require("./models/cursos.model");

const app = express();
app.use(express.json());

app.get("/cursos/:id", (req, res) => {
  const { id } = req.params;
  CursosModel.findByPk(id, {
    include: AlumnosModel,
  }).then((curso) => res.send(curso));
});

app.post("/alumnos", (req, res) => {
  const alumno = req.body;
  console.log(alumno);
  AlumnosModel.create(alumno).then(() => res.send({ msg: "Alumno creado" }));
});

app.get("/alumnos/:id", (req, res) => {
  const { id } = req.params;
  AlumnosModel.findByPk(id).then((alumno) => res.send(alumno));
});

app.listen(3000, () => {
  db.authenticate()
    .then(() => console.log("Todo esta ok con la base de datos"))
    .catch(() => console.log("Algo salio mal con la base de datos"));
  console.log("Servidor escuchando en el puerto 3000");
});
