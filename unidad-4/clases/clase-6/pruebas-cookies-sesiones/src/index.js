const express = require("express");
const session = require("express-session");
const PORT = 3000;
const MAX_AGE = 60 * 1000;
const app = express();

app.use(express.json());
app.use(
  session({
    secret: "I496h9B3roVKBiBMmn60NdRWS9IPhDzg",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: MAX_AGE },
  })
);

const misNumeros = [15, 13, 25, 100, 8, 9, 15];

app.get("/", (req, res) => {
  const nombre = req.session.name;
  res.send({
    msg: "Hola vos sos: " + nombre + " lo se por la sesion!",
  });
});

app.post("/", (req, res) => {
  req.session.name = req.body.name;
  req.session.index = 0;
  res.send({
    msg: "Nombre guardado!",
  });
});

app.get("/next", (req, res) => {
  const index = req.session.index; // -> 0 // la seguna vez -> 1
  const numero = misNumeros[index];
  req.session.index += 1; // -> 1
  res.send({
    numero,
    tuSession: req.session,
  });
});

app.listen(PORT, () => {
  console.log("Servidor corriend en el puerto: " + PORT);
});
