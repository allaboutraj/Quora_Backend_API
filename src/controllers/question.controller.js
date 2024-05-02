function ping(req, res) {
  return res.json({ message: "Ping from UserController " });
}

function postQuestion(req, res) {}

function getQuestions(req, res) {}

function postAnswer(req, res) {}

function likeAQuestion(req, res) {}

module.exports = {
  postQuestion,
  postAnswer,
  likeAQuestion,
  ping,
};
