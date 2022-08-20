const express = require("express");

const routes = require("./src/routes");

const PORT = 3002;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));
app.use(routes);

app.listen(PORT, () => {
  console.info(`App listening on http://localhost:${PORT}`);
});
