const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  port: "3306",
  database: "pruebas",
  username: "root",
  password: "ICARO12345",
  dialect: "mysql",
});

module.exports = db;
