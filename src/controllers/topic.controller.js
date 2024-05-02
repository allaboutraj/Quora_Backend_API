function ping(req, res) {
  return res.json({ message: "Ping from UserController " });
}

function addTopic(req, res) {}

function getTopics(req, res) {}

module.exports = {
  addTopic,
  getTopics,
  ping,
};
