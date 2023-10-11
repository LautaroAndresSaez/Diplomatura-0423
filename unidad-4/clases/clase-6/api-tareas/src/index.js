const express = require("express");
const session = require("express-session");
const tareasRouter = require("./routes/tareas.routes");
const authRouter = require("./routes/auth.routes");
const PORT = 3000;

const middlewareDePrueba = (req, res, next) => {
  console.log("Llego una petición", req.body);
  next();
};

const app = express();
app.use(express.json());
app.use(
  session({
    secret: "I496h9B3roVKBiBMmn60NdRWS9IPhDzg",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 60 * 60 * 1000 },
  })
);
app.use(middlewareDePrueba);

app.use("/auth", authRouter);
app.use("/tareas", tareasRouter);

app.get("/", (req, res) => {
  res.send("Hola");
});

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto: ${PORT}`));
