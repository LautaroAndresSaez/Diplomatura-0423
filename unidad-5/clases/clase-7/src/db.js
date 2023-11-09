const { Sequelize } = require("sequelize");

const db = new Sequelize({
  database: "clase-11-9",
  host: "localhost",
  port: "3306",
  username: "root",
  password: "ICARO12345",
  dialect: "mysql",
});

module.exports = db;
