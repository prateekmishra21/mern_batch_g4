const express = require("express");
const { signup, login, isAuthenticate } = require("../controllers/user");

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.get("/is-auth", isAuthenticate);

module.exports = { authRouter };
