const express = require("express");

const PORT = 3002;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

app.listen(PORT, () => {
  console.info(`App listening on http://localhost:${PORT}`);
});
