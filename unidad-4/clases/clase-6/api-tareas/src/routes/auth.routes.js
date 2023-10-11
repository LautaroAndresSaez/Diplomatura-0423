const { Router } = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = Router();

authRouter.post("/sign-in", authController.signIn);

module.exports = authRouter;
