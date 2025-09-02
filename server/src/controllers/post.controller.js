const express = require("express");
const ReadFileHelper = require("../helpers/read.file");
const writeFileHelper = require("../helpers/write.file");
const { v4: uuidv4 } = require("uuid");

const getAllPost = (req, res) => {
  try {
    const posts = ReadFileHelper("posts");
    if (!posts || posts.length === 0) {
      return res.status(404).json({ message: "No posts found" });
    }
    res.status(200).json(posts);
  } catch (error) {
    console.error("Error fetching posts:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const createPost = (req, res) => {
  try {
    const { userId } = req.params;
    const { content } = req.body;
    const file = req.file;
    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }
    if (!file) {
      return res.status(400).json({ message: "File is required" });
    }
    const users = ReadFileHelper("users");
    const usersexist = users.find((user) => user.id === userId);
    if (!usersexist) {
      return res.status(404).json({ message: "User not found" });
    }
    const posts = ReadFileHelper("posts");
    const newPost = {
      id: uuidv4(),
      userId,
      content,
      file: `http://localhost:5000/uploads/${file.filename}`,
      isActive: true,
    };
    posts.unshift(newPost);
    writeFileHelper("posts", posts);
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
const deletePost = (req, res) => {
  try {
    const { id } = req.params;
    const posts = ReadFileHelper("posts");
    const updatedPosts = posts.filter((post) => post.id !== id);
    if (posts.length === updatedPosts.length) {
      return res.status(404).json({ message: "Post not found" });
    }
    writeFileHelper("posts", updatedPosts);
    return res.status(204).send();
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllPost, createPost, deletePost };
