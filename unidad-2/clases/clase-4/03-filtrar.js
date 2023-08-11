const usuarios = require("./usuarios");

//entrada: [{ role: "admin" }, { role: "usuario" }, { role: "vendedor" }];
//salida: [{ role: "usuario" }, { role: "vendedor" }];

const eliminarAdmins = (array) => {
  const sinAdmins = [];
  //filtrado de usuarios
  for (let i = 0; i < array.length; i++) {
    if (array[i].role !== "admin") {
      sinAdmins.push(array[i]);
    }
  }
  //return array sin admins
  return sinAdmins;
}; //-> array

console.log(eliminarAdmins(usuarios));
