const express = require("express");
const { getAllUsers, createUser, updateUser, getSingleUser, changeStatus, deleteUser } = require("../controllers/user.controller");
const UserRouter = express.Router();

UserRouter.get("/", getAllUsers);
UserRouter.post("/", createUser);
UserRouter.put("/:id", updateUser);
UserRouter.get("/:id", getSingleUser);
UserRouter.patch("/:id/status", changeStatus);
UserRouter.delete("/:id", deleteUser);

module.exports = UserRouter;
