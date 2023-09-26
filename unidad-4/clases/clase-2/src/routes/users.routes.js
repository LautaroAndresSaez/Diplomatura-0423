//1- importar el Router
const { Router } = require("express");

//2*- Importamos en controlador de usuarios
const usersController = require("../controllers/users.controllers");
//2- Crear nuestro Router personalizado
const usersRouter = Router();

//3- Creamos nuestros endpoints
usersRouter.get("/", usersController.buscarTodos); // -> /users
usersRouter.post("/", usersController.crear); // -> /users

usersRouter.get("/:id", usersController.buscarPorId); // -> /users/:id

//4- Exportar el Router
module.exports = usersRouter;
