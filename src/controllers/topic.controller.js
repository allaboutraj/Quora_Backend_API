function ping(req, res) {
  return res.json({ message: "Ping from Topic Controller " });
}

function addTopic(req, res) {}

function getTopics(req, res) {}

module.exports = {
  addTopic,
  getTopics,
  ping,
};
