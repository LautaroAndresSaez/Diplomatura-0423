const { DataTypes } = require("sequelize");
const db = require("../db");

const NoteModel = db.define(
  "notes",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    color: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  { timestamps: false }
);

module.exports = NoteModel;
