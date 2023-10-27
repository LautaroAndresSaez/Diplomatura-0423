const usuarioModel = require("../models/usuarios.model");

const bcrypt = require("bcrypt");

const SALT = 10;

const signUp = (req, res) => {
  const usuario = req.body;
  const password = bcrypt.hashSync(usuario.password, SALT);
  usuario.password = password;

  usuarioModel.agregarUsuario(usuario).then((resultado) => {
    req.session.usuario = resultado[0];
    res.send({
      message: "Usuario logeado",
    });
  });
};

const find = (req, res) => {
  usuarioModel.leerUsuarios().then((usuarios) => {
    res.send(usuarios);
  });
};

module.exports = {
  signUp,
  find,
};
