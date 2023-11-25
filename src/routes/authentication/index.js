const createAuthCookie = require("../../controllers/authentication/createAuthCookie");
const logout = require("../../controllers/authentication/logout");
const {
  createUser,
} = require("../../controllers/authentication/users.controller");

const authRouter = require("express").Router();

authRouter.post("/jwt", createAuthCookie);
authRouter.post("/logout", logout);
authRouter.post("/users", createUser);

module.exports = authRouter;
