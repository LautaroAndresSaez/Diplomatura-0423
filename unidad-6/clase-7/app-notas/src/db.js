const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  database: "repaso-fullstack",
  username: "root",
  password: "example",
});

module.exports = db;
