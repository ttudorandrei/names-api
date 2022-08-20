const fs = require("fs");
const path = require("path");

const writeToDB = (data) => {
  try {
    // your code here
    const filePath = path.join(__dirname, "../db/db.json");
    fs.writeFileSync(filePath, data, "utf-8");
  } catch (error) {
    // if try block fails, go here
    // do whatever you wanna do in here with the error
    console.log(error);
  }
};

module.exports = writeToDB;
