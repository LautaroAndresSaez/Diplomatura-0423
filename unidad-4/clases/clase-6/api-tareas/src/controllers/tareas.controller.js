const tareasModel = require("../models/tareas.model");

const buscarTodas = (req, res) => {
  /* 
  const tareas = tareasModel.buscarTodas();
  const tareasFiltradas = tareas.filter(
    (tarea) => tarea.usuario === req.session.nombre
  );
  */
  const tareas = tareasModel.buscarTodasPorUsuario(req.session.nombre);
  res.send({ tareas });
};

const agregar = (req, res) => {
  const tarea = req.body; //-> nombre y la desc falta el usuario!!!
  tarea.usuario = req.session.nombre;
  tareasModel.agregar(tarea);
  res.send({ mensaje: "Tarea agregada!" });
};

const buscarTarea = (req, res) => {
  const id = Number(req.params.id);
  const tarea = tareasModel.buscarPorId(id);
  res.send({
    tarea,
  });
};

const actualizarTarea = (req, res) => {
  const id = Number(req.params.id);
  const nuevaTarea = tareasModel.actualizarPorId(
    id,
    req.body.nombre, //-> undefined en caso de que no exista
    req.body.desc
  );
  res.send({
    nuevaTarea,
  });
};

const borrarTarea = (req, res) => {
  const id = Number(req.params.id);
  const tarea = tareasModel.borrarPorId(id);
  res.send({
    tarea,
  });
};

module.exports = {
  buscarTodas,
  agregar,
  buscarTarea,
  actualizarTarea,
  borrarTarea,
};
