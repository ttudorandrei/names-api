const express = require("express");

const routes = require("./src/routes");

const PORT = 3002; // port the app is going to be running on

const app = express();

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json({ extended: true }));
app.use(express.static("public"));

app.use(routes);

// running the server
app.listen(PORT, () => {
  console.info(`App listening on http://localhost:${PORT}`);
});
