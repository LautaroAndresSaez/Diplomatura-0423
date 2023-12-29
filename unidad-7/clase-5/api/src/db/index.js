const { Sequelize } = require("sequelize");
const db = new Sequelize({
  dialect: "mysql",
  database: "curso",
  host: "localhost",
  password: "ICARO12345",
  username: "root",
});

module.exports = { db };
