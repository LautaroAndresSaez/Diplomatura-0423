const { Sequelize } = require("sequelize");

const db = new Sequelize({
  dialect: "mysql",
  host: "localhost",
  port: "3306",
  database: "pruebas",
  username: "root",
  password: "ICARO12345",
});

module.exports = db;
