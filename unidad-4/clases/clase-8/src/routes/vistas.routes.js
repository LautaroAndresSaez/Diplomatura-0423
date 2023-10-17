const { Router } = require("express");
const path = require("path");
const vistasRouter = Router();

vistasRouter.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "home.html"));
});

vistasRouter.get("/ejemplo", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "ejemplo.html"));
});

vistasRouter.get("/mi-vista", (req, res) => {
  res.sendFile(path.join(__dirname, "..", "views", "test.html"));
});

module.exports = vistasRouter;
