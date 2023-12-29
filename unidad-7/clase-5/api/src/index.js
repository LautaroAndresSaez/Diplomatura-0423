const express = require("express");
const alumnosRouter = require("./routes/alumnos.routes");

const app = express();
app.use(express.json());

app.use("/alumnos", alumnosRouter);

app.listen(8000, () => {
  console.log("Servidor corriendo en el puerto: 8000");
});
