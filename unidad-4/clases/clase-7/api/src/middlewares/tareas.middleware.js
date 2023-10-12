const { body, param } = require("express-validator");

const validarNombre = body("nombre") //req.body.nombre
  .isString()
  .withMessage("El nombre tiene que ser un string")
  .isLength({
    min: 4,
  })
  .withMessage("El nombre tiene que tener al menos 4 caracteres");

const validarActualizarNombre = validarNombre.optional();

const validarDesc = body("desc")
  .isString()
  .isLength({
    min: 4,
  })
  .withMessage("La descripción tiene que tener al menor 4 caracteres");

const validarActualizarDesc = body("desc")
  .isString()
  .isLength({
    min: 4,
  })
  .withMessage("La descripción tiene que tener al menor 4 caracteres")
  .optional();

const validarId = param("id")
  .notEmpty()
  .withMessage("El id es obligatorio")
  .isInt({
    min: 0,
  })
  .withMessage("El id debe ser un número mayor a 0");

module.exports = {
  validarNombre,
  validarDesc,
  validarId,
  validarActualizarNombre,
  validarActualizarDesc,
};
