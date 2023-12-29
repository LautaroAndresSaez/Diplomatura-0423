const { DataTypes } = require("sequelize");
const { db } = require("../db");

const AlumnoModel = db.define(
  "alumnos",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    edad: {
      type: DataTypes.INTEGER,
    },
  },
  { timestamps: false }
);

module.exports = AlumnoModel;
