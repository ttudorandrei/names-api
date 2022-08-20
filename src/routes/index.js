const { Router } = require("express");

const apiRoutes = require("./api/index.js");

const router = Router();

router.use("/api", apiRoutes); // only handling data
// router.get("/", htmlRoutes); // only handling html files

module.exports = router;
