const express = require("express");
const db = require("./db");
const PORT = 8000;

const app = express();

app.get("/productos", (req, res) => {
  res.send([]);
});

app.post("/productos", (req, res) => {
  res.send("Producto creado");
});

app.listen(PORT, () => {
  db.authenticate().then(() =>
    console.log("Conexión a la base de datos exitosa!")
  );
  console.log(`Servidor escuchando en el puerto: ${PORT}`);
});
