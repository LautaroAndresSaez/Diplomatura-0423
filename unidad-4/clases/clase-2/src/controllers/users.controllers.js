const usersModel = require("../models/users.model");

const buscarTodos = (req, res) => {
  res.send(usersModel.getAll());
};

const buscarPorId = (req, res) => {
  const id = req.params.id;
  const user = usersModel.findById(id);
  res.send({
    user,
    message: "Desde el controlador",
  });
};

const crear = (req, res) => {
  const nuevoUsuario = req.body;
  res.send({
    nuevoUsuario,
    message: "hola",
  });
};

module.exports = {
  buscarPorId,
  buscarTodos,
  crear,
};
