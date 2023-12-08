const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  database: "repaso_fullstack",
  username: "root",
  password: "admin",
});

module.exports = db;
