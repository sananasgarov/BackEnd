const express = require("express");
const router = require("./src/routers");
const cors = require("cors");
const app = express();
require("dotenv").config();
// const port = process.env.PORT || 3210;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(router);
app.use("/uploads", express.static("src/uploads"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(3210, () => {
  console.log(`Server is running at http://localhost:3210`);
});
