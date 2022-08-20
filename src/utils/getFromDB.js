const fs = require("fs");
const path = require("path");

const getFromDB = () => {
  try {
    // get the file path we need to read from
    const filePath = path.join(__dirname, "../db/db.json");

    // get the data from that file path
    const data = fs.readFileSync(filePath, "utf-8");

    // parse it and return it
    return JSON.parse(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = getFromDB;
