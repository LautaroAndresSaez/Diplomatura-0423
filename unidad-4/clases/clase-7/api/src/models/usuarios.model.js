const fs = require("fs");

const leerUsuarios = () => {
  const usuariosString = fs.readFileSync("data/usuarios.json");
  const usuarios = JSON.parse(usuariosString);
  return usuarios;
};

const agregarUsuario = (usuario) => {
  const usuarios = leerUsuarios(); //array de usuarios
  usuarios.push(usuario);
  fs.writeFileSync("data/usuarios.json", JSON.stringify(usuarios, null, 4));
};

const buscarPorEmail = (email) => {
  const usuarios = leerUsuarios();
  const usuario = usuarios.find((usuario) => usuario.email === email);
  return usuario;
};

module.exports = {
  agregarUsuario,
  buscarPorEmail,
};
