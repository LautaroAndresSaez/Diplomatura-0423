const express = require("express");
const db = require("./db");
const autoresRouter = require("./routes/autores.routes");
const librosRouter = require("./routes/libros.routes");
const PORT = 8000;

const app = express();
app.use(express.json());

app.use("/autores", autoresRouter);
app.use("/libros", librosRouter);

app.listen(PORT, () => {
  db.authenticate().then(() => {
    console.log("Conexión a la base de datos exitosa!");
  });
  console.log(`El servidor esta corriendo en el puerto: ${PORT}`);
});
