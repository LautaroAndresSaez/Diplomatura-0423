const express = require("express");
const PORT = 3000;

const tareas = [
  {
    nombre: "Comprar pan",
    desc: "Ir a la panaderia",
  },
  {
    nombre: "Dar clases",
    desc: "Dar clase 3",
  },
];

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola");
});

app.get("/tareas", (req, res) => {
  res.send({ tareas });
});

app.post("/tareas", (req, res) => {
  const tarea = req.body;
  tareas.push(tarea);
  res.send({ mensaje: "Tarea agregada!" });
});

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));
