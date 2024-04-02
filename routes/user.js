const express = require("express");
const {
  createUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
} = require("../controllers/user");
const fileUpload = require("express-fileupload");

const router = express.Router();

router.post("/user", fileUpload(), createUser);

router.get("/users", readUsers);

router.get("/user/:id", readUser);

router.put("/user/:id", fileUpload(), updateUser);

router.delete("/user/:id", deleteUser);

module.exports = router;
