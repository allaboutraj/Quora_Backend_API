const express = require("express");

const { questionController } = require("../../controllers");
const { answerController } = require("../../controllers");
const { likeController } = require("../../controllers");

const questionRouter = express.Router();

questionRouter.get("/ping", questionController.ping);
questionRouter.post("/", questionController.postQuestion);
questionRouter.get("/search", questionController.getQuestions);
questionRouter.put("/:id/answers", answerController.postAnswer);
questionRouter.put("/:id/likes", likeController.likeAQuestion);

module.exports = questionRouter;
