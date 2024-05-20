function ping(req, res) {
  return res.json({ message: "Ping from Topic Controller " });
}

function likeAQuestion(req, res) {}

function likeAnswer(req, res) {}

function likeComment(req, res) {}

module.exports = {
  likeAQuestion,
  likeAnswer,
  likeComment,
  ping,
};
