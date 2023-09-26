const express = require("express");
//1- Traer nuestro Router de usuarios
const usersRouter = require("./routes/users.routes");

const PORT = 3000;
const app = express();

app.use(express.json());

//2- Cargamos las rutas de usuario en la app
app.use("/users", usersRouter); //"/users" -> ruta base

app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));
