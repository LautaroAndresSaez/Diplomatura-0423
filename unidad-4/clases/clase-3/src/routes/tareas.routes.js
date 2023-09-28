const { Router } = require("express");

const tareasRouter = Router();

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

tareasRouter.get("/", (req, res) => {
  res.send({ tareas });
});

tareasRouter.post("/", (req, res) => {
  const tarea = req.body;
  tareas.push(tarea);
  res.send({ mensaje: "Tarea agregada!" });
});

module.exports = tareasRouter;
