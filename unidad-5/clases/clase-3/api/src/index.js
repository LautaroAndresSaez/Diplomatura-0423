const express = require("express");
const session = require("express-session");

const tareasRouter = require("./routes/tareas.routes");
const authRouter = require("./routes/usuarios.routes");
const vistasRouter = require("./routes/vistas.routes");
const db = require("./db");

const PORT = 3000;

const middlewareDePrueba = (req, res, next) => {
  console.log("Llego una petición", req.body);
  next();
};

const app = express();

app.use(express.json());
app.use(express.static("public"));
app.use(
  session({
    secret: "shhhh",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 }, //Duración en milisegundos (1 hora)
  })
);
app.use(middlewareDePrueba);

app.use("/", vistasRouter);
app.use("/tareas", tareasRouter);
app.use("/auth", authRouter);

app.listen(PORT, () => {
  db.authenticate().then(() => console.log("Conectado a la base de datos!"));
  console.log(`Servidor corriendo en el puerto: ${PORT}`);
});
