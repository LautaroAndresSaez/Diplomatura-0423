const crear = (nombre, descripcion) => {
  console.log("creando tarea");
};

const leer = () => {
  console.log("leer tareas");
};

const actualizar = (nombre, nuevaDescripcion) => {
  console.log("actualizar tarea");
};

const eliminar = (nombre) => {
  console.log("elimina la tarea");
};

module.exports = {
  crear,
  leer,
  actualizar,
  eliminar,
};
