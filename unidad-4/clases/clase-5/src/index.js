const express = require("express");
const tareasRouter = require("./routes/tareas.routes");
const PORT = 3000;

const middlewareDePrueba = (req, res, next) => {
  console.log("Llego una petición", req.body);
  next();
};

const app = express();
app.use(express.json());
app.use(middlewareDePrueba);

app.use("/tareas", tareasRouter);

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));
