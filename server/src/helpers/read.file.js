const fs = require("fs")

const ReadFileHelper = (dbname = "all") => {
  const data = JSON.parse(fs.readFileSync(`./src/db/data.json`));
  return dbname === "all" ? data : data[dbname];
};


module.exports = ReadFileHelper;