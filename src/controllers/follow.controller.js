function ping(req, res) {
  return res.json({ message: "Ping from Follow Controller " });
}

function followUser(req, res) {}

module.exports = {
  followUser,
  ping,
};
