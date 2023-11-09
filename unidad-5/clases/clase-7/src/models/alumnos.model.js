const { DataTypes } = require("sequelize");
const db = require("../db");
const CursosModel = require("./cursos.model");

const AlumnosModel = db.define(
  "alumnos",
  {
    nombre: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

AlumnosModel.belongsTo(CursosModel, {
  foreignKey: "id_curso",
});

CursosModel.hasMany(AlumnosModel, {
  foreignKey: "id_curso",
});

module.exports = AlumnosModel;
