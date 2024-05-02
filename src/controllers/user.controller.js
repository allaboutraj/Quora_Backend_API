function pingUserController(req, res) {
  return res.json({ message: "Ping from UserController " });
}

function addUser(req, res) {}

function getUser(req, res) {}

function updateUser(req, res) {}

module.exports = {
  addUser,
  getUser,
  updateUser,
  pingUserController,
};
