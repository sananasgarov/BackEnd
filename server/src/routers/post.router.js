const express = require("express");
const { createPost, getAllPost, deletePost } = require("../controllers/post.controller");
const upload = require("../utils/upload");
const PostRouter = express.Router();

PostRouter.get("/", getAllPost);
PostRouter.post("/:userId", upload.single("file"), createPost);
// PostRouter.put("/:id");
// PostRouter.get("/:id");
PostRouter.delete("/:id", deletePost);

module.exports = PostRouter;
