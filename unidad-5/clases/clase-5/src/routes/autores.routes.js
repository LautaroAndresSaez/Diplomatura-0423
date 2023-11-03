const { Router } = require("express");
const db = require("../db");
const { QueryTypes } = require("sequelize");

const autoresRouter = Router();

autoresRouter.get("/", (req, res) => {
  db.query("SELECT * FROM autores", {
    type: QueryTypes.SELECT,
  })
    .then((autores) => res.send({ autores }))
    .catch((err) => {
      console.log(err);
      res.status(500).send({
        msg: "No pudimos encontrar los autores",
      });
    });
});

autoresRouter.post("/", (req, res) => {
  const { nombre, bio } = req.body; /* 
      {
          nombre: 'Luis',
          bio: 'biografia...' 
      }
    */
  db.query(
    `INSERT INTO autores (nombre, bio) VALUES (\"${nombre}\", \"${bio}\")`
  )
    .then(() => res.send({ msg: `Autor: ${nombre} creado` }))
    .catch((err) => {
      console.log(err);
      res.status(404).send({
        msg: "No fue posible crear el autor",
      });
    });
});

module.exports = autoresRouter;
