const { Router } = require("express");
const tareasController = require("../controllers/tareas.controller");
const tareasRouter = Router();

tareasRouter.get("/", tareasController.buscarTodas);

tareasRouter.post("/", tareasController.agregar);

module.exports = tareasRouter;
