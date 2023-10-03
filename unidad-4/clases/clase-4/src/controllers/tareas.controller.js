const tareasModel = require("../models/tareas.model");

const buscarTodas = (req, res) => {
  const tareas = tareasModel.buscarTodas();
  res.send({ tareas });
};

const agregar = (req, res) => {
  const tarea = req.body;
  tareasModel.agregar(tarea);
  res.send({ mensaje: "Tarea agregada!" });
};

module.exports = {
  buscarTodas,
  agregar,
};
