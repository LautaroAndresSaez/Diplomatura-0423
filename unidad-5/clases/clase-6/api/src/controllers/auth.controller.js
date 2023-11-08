const TareasModel = require("../models/tareas.model");
const UsuarioModel = require("../models/usuarios.model");

const bcrypt = require("bcrypt");

const SALT = 10;

const signUp = (req, res) => {
  const usuario = req.body;
  const password = bcrypt.hashSync(usuario.password, SALT);
  usuario.password = password;

  UsuarioModel.create({
    ...usuario,
    password,
  })
    .then((resultado) => {
      console.log(resultado);
      req.session.usuario = resultado[0];
      res.send({
        message: "Usuario logeado",
      });
    })
    .catch((err) =>
      res.status(500).send({
        msg: "Error en la consulta",
      })
    );
};

const find = (req, res) => {
  UsuarioModel.findAll({
    include: TareasModel,
  }).then((usuarios) => {
    res.send(usuarios);
  });
};

module.exports = {
  signUp,
  find,
};
