const express = require("express");

const { commentController } = require("../../controllers");
const { likeController } = require("../../controllers");

const commentRouter = express.Router();

commentRouter.get("/ping", commentController.ping);
commentRouter.post("/:id/comments", commentController.commentOnComment);
commentRouter.post("/:id/likes", likeController.likeComment);

module.exports = commentRouter;
