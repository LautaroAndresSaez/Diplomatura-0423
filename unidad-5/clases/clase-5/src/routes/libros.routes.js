const { Router } = require("express");
const db = require("../db");
const { QueryTypes } = require("sequelize");

const librosRouter = Router();

librosRouter.post("/", (req, res) => {
  const { nombre, desc, autorId } = req.body;
  db.query(
    `INSERT INTO libros (nombre, \`desc\`, autor_id) VALUES (\"${nombre}\", \"${desc}\", ${autorId})`
  )
    .then(() => res.send({ msg: `${nombre} creado` }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ msg: "No fue posible cargar el libro" });
    });
});

librosRouter.get("/", (req, res) => {
  db.query("SELECT * FROM libros", { type: QueryTypes.SELECT })
    .then((libros) => res.send({ libros }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({ msg: "Error en la base de datos" });
    });
});

module.exports = librosRouter;
