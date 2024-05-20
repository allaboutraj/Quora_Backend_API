function ping(req, res) {
  return res.json({ message: "Ping from Answer Controller " });
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
