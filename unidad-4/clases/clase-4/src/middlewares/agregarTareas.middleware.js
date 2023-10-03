const validarTarea = (req, res, next) => {
  const tarea = req.body;
  if (!tarea.nombre) {
    res.status(404).send({ message: "El nombre es obligatorio" });
    return;
  }
  if (!tarea.desc) {
    res.status(404).send({ message: "La descripción es obligatoria" });
    return;
  }
  next();
};

const saludar = (req, res, next) => {
  console.log("Hola desde /tareas por POST!");
  next();
};

module.exports = {
  validarTarea,
  saludar,
};
