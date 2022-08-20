const { Router } = require("express");

const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello James" });
});

router.post("/", () => {});

router.put("/:id", () => {});

router.delete("/:id", () => {});

module.exports = router;
