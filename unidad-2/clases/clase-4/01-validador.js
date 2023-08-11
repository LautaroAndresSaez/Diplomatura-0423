const usuarios = require("./usuarios");

const validarUsuario = (usuario) => {
  //false -> no tengo nombre
  //false -> la contraseña tiene menos de 8 caracteres
  //true -> tengo nombre y la contraseña tiene 8 caracteres o mas
  if (usuario.name && usuario.password?.length >= 8) {
    return true;
  } else {
    return false;
  }
};

const validarUsuarioPro = (usuario) =>
  usuario.password?.length >= 8 && usuario.name;

const usuarioSinPassword = {
  name: "Alfonso",
};

const usuarioConPasswordCorto = {
  name: "Mati",
  password: "Mati123",
};

const usuarioSinNombre = {
  password: "123456789",
};

const usuario = {
  name: "Fede",
  password: "123456789",
};

console.log("Usuario sin contraseña: ", validarUsuario(usuarioSinPassword));

console.log(
  "Usuario con contraseña corta: ",
  validarUsuario(usuarioConPasswordCorto)
);

console.log("Usuario sin nombre: ", validarUsuario(usuarioSinNombre));

console.log("Usuario: ", validarUsuario(usuario));
