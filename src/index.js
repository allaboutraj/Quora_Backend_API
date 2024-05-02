const express = require("express");
const { PORT } = require("./config/server.config");

const app = express();

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));

app.get("/ping", (req, res) => {
  res.json({ message: "Ping Success" });
});

app.listen(PORT, async () => {
  console.log(`Server isrunning on PORT : ${PORT}`);
});
