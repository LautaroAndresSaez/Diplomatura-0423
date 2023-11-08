const TareasModel = require("../models/tareas.model");
const { validationResult } = require("express-validator");
const UsuarioModel = require("../models/usuarios.model");

const buscarTodas = (req, res) => {
  TareasModel.findAll({
    include: UsuarioModel,
  }).then((tareas) => {
    res.send({ tareas });
  });
};

const agregar = (req, res) => {
  const tarea = req.body;
  tarea["id_usuario"] = 9;
  console.log(req.session);
  TareasModel.create(tarea).then(() => {
    res.send({ mensaje: "Tarea agregada!" });
  });
};

const buscarTarea = (req, res) => {
  const id = Number(req.params.id);
  TareasModel.findByPk(id, {
    include: UsuarioModel,
  })
    .then((tarea) => {
      res.send({ tarea });
    })
    .catch(() => res.status(404).send({ msg: "La tarea no existe :(" }));
};

const actualizarTarea = (req, res) => {
  const id = Number(req.params.id);
  TareasModel.update(
    {
      nombre: req.body.nombre,
      desc: req.body.desc,
    },
    {
      where: {
        id,
      },
    }
  ).then((cantidad) => res.send({ msg: `Se actualizaron ${cantidad} tareas` }));
};

const borrarTarea = (req, res) => {
  const id = Number(req.params.id);
  TareasModel.destroy({
    where: {
      id,
    },
  }).then(() => res.send({ msg: `Se borro la tarea de id: ${id}` }));
};

module.exports = {
  buscarTodas,
  agregar,
  buscarTarea,
  actualizarTarea,
  borrarTarea,
};
