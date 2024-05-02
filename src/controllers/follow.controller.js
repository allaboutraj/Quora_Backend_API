function ping(req, res) {
  return res.json({ message: "Ping from UserController " });
}

function followUser(req, res) {}

module.exports = {
  followUser,
  ping,
};
