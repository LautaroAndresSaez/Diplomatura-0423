const { DataTypes } = require("sequelize");

const db = require("../db");

const CursosModel = db.define(
  "cursos",
  {
    nombre: {
      type: DataTypes.STRING,
    },
    profesor: {
      type: DataTypes.STRING,
    },
  },
  { timestamps: false }
);

module.exports = CursosModel;
