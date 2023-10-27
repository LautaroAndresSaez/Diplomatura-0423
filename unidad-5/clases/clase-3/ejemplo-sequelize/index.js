const { Sequelize, QueryTypes } = require("sequelize");

const db = new Sequelize({
  host: "localhost",
  port: "3306",
  database: "pruebas",
  username: "root",
  password: "ICARO12345",
  dialect: "mysql",
});

db.authenticate().then(() => console.log("Conectado a MySQL con exito!"));

db.query(
  "INSERT INTO usuarios (password, email, nombre) VALUES ('holamundo', 'hm2@gmail.com', 'Gauss')"
)
  .then(() => {
    db.query("SELECT * FROM usuarios", {
      type: QueryTypes.SELECT,
    }).then((result) => console.log(result));
  })
  .catch((e) => console.log("error: ", e));
