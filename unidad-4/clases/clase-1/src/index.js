const express = require("express");
const usersModel = require("./model/users.model");
const PORT = 8000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hola mundo!");
});

app.post("/", (req, res) => {
  res.send({
    message: "Informe creado",
  });
});

app.get("/users", (req, res) => {
  const firstName = req.query.firstName;
  /*
    su filtro
  */
  usuarios = [];
  res.send({
    usuarios,
  });
});

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const usuario = usersModel.findById(id);
  res.send({
    usuario,
  });
});

app.listen(PORT, () => {
  console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
});
