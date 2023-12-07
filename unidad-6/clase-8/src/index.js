const express = require("express");
const db = require("./db");
const notesRouter = require("./routes/notes.routes");
const PORT = 8000;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static("views"));

app.use("/notes", notesRouter);

app.listen(PORT, async () => {
  await db.authenticate();
  // Esto es otra manera de usar asincronia
  // Antes usabamos then/catch
  console.log(
    `Servidor corriendo en el puerto ${PORT} y conectado con la base de datos - http://localhost:${PORT}`
  );
});
