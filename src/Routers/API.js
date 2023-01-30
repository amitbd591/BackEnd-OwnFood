const express = require("express");
const router = express.Router();
const SuperAdminController = require("../Controllers/Admins/SuperAdminController");
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");

// Super Admin Registration Router
router.post("/Registration", SuperAdminController.Registration);

module.exports = router;
