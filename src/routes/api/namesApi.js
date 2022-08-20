const { Router } = require("express");
const { v4 } = require("uuid");

const getFromDB = require("../../utils/getFromDB");
const writeToDB = require("../../utils/writeToDB");

const router = Router();

// get all names
router.get("/", (req, res) => {
  const names = getFromDB();

  res.json(names);
});

// get one name by id
router.get("/:id", (req, res) => {});

// add new name
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

// update a name
router.put("/:id", () => {});

// delete a name
router.delete("/:id", () => {});

module.exports = router;
