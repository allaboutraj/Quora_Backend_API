function ping(req, res) {
  return res.json({ message: "Ping from UserController " });
}

function commentAnswer(req, res) {}

function likeAnswer(req, res) {}

function updateAnswer(req, res) {}

module.exports = {
  commentAnswer,
  likeAnswer,
  updateAnswer,
  ping,
};
