const express = require("express");
const PORT = 3000;

const tareas = [
  {
    nombre: "Comprar pan",
    desc: "Ir a la panaderia",
  },
];

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));
