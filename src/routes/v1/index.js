const express = require("express");

const UserRouter = require("./user.routes");

const v1Router = express.Router();

v1Router.use("/users", UserRouter);

module.exports = v1Router;
