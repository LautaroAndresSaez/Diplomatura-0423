const { Router } = require("express");
const tareasController = require("../controllers/tareas.controller");

const { validarErrores } = require("../middlewares");

const {
  validarNombre,
  validarDesc,
  validarId,
  validarActualizarDesc,
  validarActualizarNombre,
} = require("../middlewares/tareas.middleware");

const tareasRouter = Router();

tareasRouter.get("/", tareasController.buscarTodas);

tareasRouter.post(
  "/",
  [validarNombre, validarDesc, validarErrores],
  tareasController.agregar
);

tareasRouter.get(
  "/:id",
  [validarId, validarErrores],
  tareasController.buscarTarea
);

tareasRouter.put(
  "/:id",
  [validarId, validarActualizarNombre, validarActualizarDesc, validarErrores],
  tareasController.actualizarTarea
);

tareasRouter.delete(
  "/:id",
  [validarId, validarErrores],
  tareasController.borrarTarea
);

module.exports = tareasRouter;
