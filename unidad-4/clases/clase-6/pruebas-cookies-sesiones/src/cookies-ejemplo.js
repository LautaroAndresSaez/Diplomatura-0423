const express = require("express");
const cookieParser = require("cookie-parser");
const PORT = 3000;
const MAX_AGE = 10 * 1000;
const app = express();

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  const nombre = req.cookies.name; /* 
    {
        "username": "Lautaro",
        "name": undefined
    }
  */
  res.send({
    msg: "Hola vos sos: " + nombre,
  });
});

app.post("/", (req, res) => {
  res.cookie("name", req.body.name, {
    maxAge: MAX_AGE,
  });
  res.send({
    msg: "Nombre guardado!",
  });
});

app.listen(PORT, () => {
  console.log("Servidor corriend en el puerto: " + PORT);
});
