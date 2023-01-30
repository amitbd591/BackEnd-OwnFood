const express = require("express");
const router = express.Router();
const AdminController = require("../Controllers/Admins/AdminController");
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");

// Super Admin Registration Router
router.post("/Registration", AdminController.Registration);

module.exports = router;
