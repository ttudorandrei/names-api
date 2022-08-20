const { Router } = require("express");

const namesRoutes = require("./namesApi.js");

const router = Router();

router.use("/names", namesRoutes);

module.exports = router;
