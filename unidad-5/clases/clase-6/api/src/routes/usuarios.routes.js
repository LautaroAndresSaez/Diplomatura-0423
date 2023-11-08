const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = Router();

authRouter.post("/sign-up", authController.signUp);
authRouter.get("/", authController.find);

module.exports = authRouter;
