const fs = require("fs");
const path = require("path");

const writeToDB = (data) => {
  // try catch block. If the "try" block fails, the code inside the "catch" block will run, usually just a console.log()
  try {
    // your code here
    const filePath = path.join(__dirname, "../db/db.json"); // create the target filepath
    fs.writeFileSync(filePath, data, "utf-8"); // write the data to that filepath
  } catch (error) {
    // if try block fails, go here
    // do whatever you wanna do in here with the error
    console.log(error);
  }
};

module.exports = writeToDB;
