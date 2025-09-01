const fs = require("fs")
const ReadFileHelper = require("./read.file")
const writeFileHelper = (dbname,newData) => {
    const AllData = ReadFileHelper()
    AllData[dbname] = newData
    fs.writeFileSync(`./src/db/data.json`, JSON.stringify(AllData, null, 2));
}

module.exports = writeFileHelper;