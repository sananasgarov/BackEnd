const express = require("express");
const ReadFileHelper = require("../helpers/read.file");
const writeFileHelper = require("../helpers/write.file");
const { v4: uuidv4 } = require("uuid");

const getAllPost = (req, res) => {
  const posts = ReadFileHelper("posts");
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
      file: `http://localhost:3210/uploads/${file.filename}`,
      isActive: true
    };
    posts.unshift(newPost);
    writeFileHelper("posts", posts);
    return res.status(201).json(newPost);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

module.exports = { getAllPost, createPost };
