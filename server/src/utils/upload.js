const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./src/uploads");
  },
  filename: function (req, file, cb) {
    console.log("file", file);
    console.log("req", req.body);
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + file.originalname.slice(file.originalname.lastIndexOf(".")));
  }
});

const upload = multer({ storage: storage });
module.exports = upload;
