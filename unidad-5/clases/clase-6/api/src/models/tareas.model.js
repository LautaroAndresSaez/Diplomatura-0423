const db = require("../db");
const { DataTypes } = require("sequelize");
const UsuarioModel = require("./usuarios.model");

const TareasModel = db.define(
  "tareas",
  {
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    desc: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

/*
1 tarea corresponde a 1 usuario
*/
TareasModel.belongsTo(UsuarioModel, {
  foreignKey: "id_usuario",
});

/*
1 usuario tiene muchas tareas
*/
UsuarioModel.hasMany(TareasModel, {
  foreignKey: "id_usuario",
});

module.exports = TareasModel;
