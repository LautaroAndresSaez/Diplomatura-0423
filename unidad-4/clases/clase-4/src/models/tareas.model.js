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

module.exports = {
  agregar,
  buscarTodas,
};
