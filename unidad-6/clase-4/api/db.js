const { Sequelize } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  dialect: "mysql",
  port: 3306,
  username: "root",
  password: "ICARO12345",
  database: 'ecommerce'
});

module.exports = db
