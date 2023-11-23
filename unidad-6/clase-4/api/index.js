const express = require("express");
const bcrypt = require("bcrypt");
const UserModel = require("./models/user.model");

const app = express();

app.use(express.json())

app.post("/auth/sign-up", async (req, res) => {
  console.log(req.body)
  const user = req.body;
  user.password = bcrypt.hashSync(user.password);
  await UserModel.create(user);
  res.send({
    msg: "Usuario creado!",
  });
});

app.get("/users", async (req, res) => {
  const users = await UserModel.findAll()
  res.send({ users });
});

app.listen(8000, () => {
  console.log("Server is running in port 8000");
});
