const { Router } = require("express");
const tareasController = require("../controllers/tareas.controller");

const {
  validarTarea,
  saludar,
} = require("../middlewares/agregarTareas.middleware");

const tareasRouter = Router();

tareasRouter.get("/", tareasController.buscarTodas);

tareasRouter.post("/", [validarTarea, saludar], tareasController.agregar);

module.exports = tareasRouter;
