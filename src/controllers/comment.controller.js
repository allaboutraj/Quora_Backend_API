function ping(req, res) {
  return res.json({ message: "Ping from Comment Controller " });
}

function commentOnComment(req, res) {}

function likeComment(req, res) {}

module.exports = {
  commentOnComment,
  likeComment,
  ping,
};
