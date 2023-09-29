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

const buscarTodas = (req, res) => {
  res.send({ tareas });
};

const agregar = (req, res) => {
  const tarea = req.body;
  tareas.push(tarea);
  res.send({ mensaje: "Tarea agregada!" });
};

module.exports = {
  buscarTodas,
  agregar,
};
