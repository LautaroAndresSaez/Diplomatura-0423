const fs = require("fs");

const agregar = (tarea) => {
  const tareas = buscarTodas();
  tareas.push(tarea);
  const nuevasTareasString = JSON.stringify(tareas, null, 4);
  fs.writeFileSync("data/tareas.json", nuevasTareasString);
};

const buscarTodas = () => {
  const tareasString = fs.readFileSync("data/tareas.json");
  const tareas = JSON.parse(tareasString);
  return tareas;
};

const buscarPorId = (id) => {
  const tareas = buscarTodas();
  return tareas[id];
};

const buscarTodasPorUsuario = (usuario) => {
  const tareas = buscarTodas();
  const tareasFiltradas = tareas.filter((tarea) => tarea.usuario === usuario);
  return tareasFiltradas;
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
  buscarTodasPorUsuario,
  buscarPorId,
  actualizarPorId,
  borrarPorId,
};
