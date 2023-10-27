const fs = require("fs");
const db = require("../db");
const { QueryTypes } = require("sequelize");

const agregar = (tarea) => {
  return db.query(
    `INSERT INTO tareas (nombre, \`desc\`, id_usuario) VALUES ('${tarea.nombre}', '${tarea.desc}', '${tarea.usuario}')`
  );
};

const buscarTodas = () => {
  return db.query("SELECT * FROM tareas", {
    type: QueryTypes.SELECT,
  });
};

const buscarPorId = (id) => {
  const tareas = buscarTodas();
  return tareas[id];
};

const actualizarPorId = (id, nombre, desc) => {
  const tareas = buscarTodas();
  if (nombre) {
    tareas[id].nombre = nombre;
  }
  if (desc) {
    tareas[id].desc = desc;
  }
  const nuevasTareasString = JSON.stringify(tareas, null, 4);
  fs.writeFileSync("data/tareas.json", nuevasTareasString);
  return tareas[id];
};

const borrarPorId = (id) => {
  const tareas = buscarTodas();
  const nuevasTareas = tareas.filter((tarea, indice) => indice !== id);
  /* 
  const nuevasTareas = [];
  for(let i = 0; i < tareas.length; i++) {
    if(i !== id) {
      nuevasTareas.push(tareas[i])
    }
  }
  */
  const nuevasTareasString = JSON.stringify(nuevasTareas, null, 4);
  fs.writeFileSync("data/tareas.json", nuevasTareasString);
  return tareas[id];
};

module.exports = {
  agregar,
  buscarTodas,
  buscarPorId,
  actualizarPorId,
  borrarPorId,
};
