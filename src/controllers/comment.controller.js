function ping(req, res) {
  return res.json({ message: "Ping from UserController " });
}

function commentOnComment(req, res) {}

function likeComment(req, res) {}

module.exports = {
  commentOnComment,
  likeComment,
  ping,
};
