const usuarioModel = require("../models/usuarios.model");

const bcrypt = require("bcrypt");

const SALT = 10;

const signUp = (req, res) => {
  const usuario = req.body;
  const password = bcrypt.hashSync(usuario.password, SALT);
  usuario.password = password;

  usuarioModel.agregarUsuario(usuario);

  req.session.name = usuario.name;
  req.session.email = usuario.email;

  res.send({
    message: "Usuario logeado",
  });
};

module.exports = {
  signUp,
};
