const ReadFileHelper = require("../helpers/read.file");
const writeFileHelper = require("../helpers/write.file");
const { v4: uuidv4 } = require("uuid");
const getAllUsers = (req, res) => {
  try {
    const data = ReadFileHelper("users");
    if (!data || data.length === 0) {
      return res.status(404).json({ message: "No users found" });
    }
    res.status(200).json(data);
  } catch (error) {
    console.error("Error reading users:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};
const createUser = (req, res) => {
  try {
    const { name } = req.body;
    if (!name) {
      return res.status(400).json({
        message: "Name is required",
      });
    }
    const users = ReadFileHelper("users");
    const userExists = users.find((user) => user.name === name);
    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }
    const newUser = {
      id: uuidv4(),
      name,
      isActive: true,
    };
    users.push(newUser);
    writeFileHelper("users", users);
    res.status(201).json({
      user: newUser,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};
const updateUser = (req, res) => {
  try {
    const { id } = req.params;
    const { name } = req.body;

    const users = ReadFileHelper("users");
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const userExists = users.find((user) => user.name === name);
    if (userExists) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    if (name) {
      users[userIndex].name = name;
    }

    writeFileHelper("users", users);

    res.status(200).json({
      user: users[userIndex],
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};
const getSingleUser = (req, res) => {
  try {
    const { id } = req.params;
    const users = ReadFileHelper("users");
    const user = users.find((user) => user.id === id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json({
      user,
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};
const changeStatus = (req, res) => {
  try {
    const { id } = req.params;
    const users = ReadFileHelper("users");
    const userIndex = users.findIndex((user) => user.id === id);
    if (!userIndex === -1) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    users[userIndex].isActive = !users[userIndex].isActive;
    writeFileHelper("users", users);

    res.status(200).json({
      message: "User status changed successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};
const deleteUser = (req, res) => {
  try {
    const { id } = req.params;

    const users = ReadFileHelper("users");
    const userIndex = users.findIndex((user) => user.id === id);

    if (userIndex === -1) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    users.splice(userIndex, 1);

    writeFileHelper("users", users);

    res.status(200).json({
      message: "User deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Internal Server error",
    });
  }
};
module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  getSingleUser,
  changeStatus,
  deleteUser,
};
