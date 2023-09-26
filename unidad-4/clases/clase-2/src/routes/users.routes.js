//1- importar el Router
const { Router } = require("express");

//2*- Importamos en controlador de usuarios
const usersController = require("../controllers/users.controllers");
//2- Crear nuestro Router personalizado
const usersRouter = Router();

//3- Creamos nuestros endpoints
usersRouter.get("/", usersController.buscarTodos);
usersRouter.post("/", usersController.crear);

usersRouter.get("/:id", usersController.buscarPorId);

//4- Exportar el Router
module.exports = usersRouter;
