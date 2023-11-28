const createAuthCookie = require("../../controllers/authentication/createAuthCookie");
const logout = require("../../controllers/authentication/logout");
const {
  createUser,
  getUserRole,
  updateUser,
} = require("../../controllers/authentication/users.controller");
const tokenVerify = require("../../utils/TokenVerify");

const authRouter = require("express").Router();

authRouter.post("/jwt", createAuthCookie);
authRouter.post("/logout", logout);
authRouter.post("/users", createUser);
authRouter.patch("/users/:email", tokenVerify, updateUser);
authRouter.get("/users/:email", getUserRole);

module.exports = authRouter;
