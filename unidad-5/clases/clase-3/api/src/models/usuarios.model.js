const fs = require("fs");
const db = require("../db");
const { QueryTypes } = require("sequelize");

const leerUsuarios = () => {
  return db.query("SELECT * FROM usuarios", {
    type: QueryTypes.SELECT,
  });
};

const agregarUsuario = (usuario) => {
  return db.query(
    `INSERT INTO usuarios (nombre, email, password) VALUES ('${usuario.name}', '${usuario.email}', '${usuario.password}')`
  );
};

const buscarPorEmail = (email) => {
  const usuarios = leerUsuarios();
  const usuario = usuarios.find((usuario) => usuario.email === email);
  return usuario;
};

module.exports = {
  leerUsuarios,
  agregarUsuario,
  buscarPorEmail,
};
