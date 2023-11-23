const { DataTypes } = require("sequelize");
const db = require("../db");

const UserModel = db.define(
  "users",
  {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    phone: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
  }
);

module.exports = UserModel;
