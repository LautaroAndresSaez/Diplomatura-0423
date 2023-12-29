const AlumnoModel  = require("../models/alumno.model");

const create = async (req, res) => {
  try {
    await AlumnoModel.create(req.body);
    res.send({
      msg: "Alumno creado con exito!",
    });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      msg: "El alumno no pudo ser creado",
    });
  }
};

const findAll = async (req, res) => {
  try {
    const alumnos = await AlumnoModel.findAll();
    res.send({ alumnos });
  } catch (e) {
    console.log(e);
    res.status(500).send({
      msg: "Error al buscar los alumnos",
    });
  }
};

module.exports = {
  create,
  findAll,
};
