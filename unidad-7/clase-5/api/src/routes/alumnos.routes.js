const { Router } = require("express");
const { body, validationResult } = require("express-validator");

const alumnosController = require("../controllers/alumnos.controller");

const alumnosRouter = Router();

alumnosRouter.get("/", alumnosController.findAll);

alumnosRouter.post(
  "/",
  [
    body("nombre")
      .isString()
      .isLength({ min: 2, max: 255 })
      .withMessage(
        "El nombre es obligatorio y debe tener entre 4 y 255 caracteres"
      ),
    body("edad")
      .isInt({
        gt: 15,
      })
      .withMessage("El alumno debe tener al menos 15 años"),
    (req, res, next) => {
      const result = validationResult(req);
      if (!result.isEmpty()) {
        res.status(404).send({
          errors: result.array(),
        });
        return;
      }
      next();
    },
  ],
  alumnosController.create
);

module.exports = alumnosRouter;
