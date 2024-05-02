const express = require("express");

const { UserController } = require("../../controllers");

const userRouter = express.Router();

userRouter.get("/ping", UserController.pingUserController);
userRouter.post("/", UserController.addUser);
userRouter.get("/:id", UserController.getUser);
userRouter.put("/:id", UserController.updateUser);

module.exports = userRouter;
