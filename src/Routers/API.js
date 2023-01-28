const express = require("express");
const router = express.Router();
const UserController = require("../Controllers/Users/UsersController");
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");

// User Profile
router.post("/Registration", UserController.Registration);

module.exports = router;
