const { Router } = require("express");
const { v4 } = require("uuid");

const getFromDB = require("../../utils/getFromDB");
const writeToDB = require("../../utils/writeToDB");

const router = Router();

router.get("/", (req, res) => {
  // get data from the db.json
  const names = getFromDB();

  res.json(names);
});

router.get("/:id", (req, res) => {});

router.post("/", (req, res) => {
  const { body } = req;
  const id = v4();
  const names = getFromDB();

  const newName = {
    ...body,
    id,
  };

  names.push(newName);

  writeToDB(JSON.stringify(names));

  res.json({ message: "Success" });
});

router.put("/:id", () => {});

router.delete("/:id", () => {});

module.exports = router;
