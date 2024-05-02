const express = require("express");

const { answerController } = require("../../controllers");
const { commentController } = require("../../controllers");
const { likeController } = require("../../controllers");

const answerRouter = express.Router();

answerRouter.get("/ping", answerController.ping);
answerRouter.post("/:id/comments", commentController.commentAnswer);
answerRouter.post("/:id/likes", likeController.likeAnswer);
answerRouter.put("/:id", answerController.updateAnswer);

module.exports = answerRouter;
