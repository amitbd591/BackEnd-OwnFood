const express = require("express");
const router = express.Router();
const SuperAdminController = require("../Controllers/Admins/SuperAdminController");
const SubAdminController = require("../Controllers/Admins/SubAdminController");
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");

// Super Admin Registration Router
router.post("/registration-super-admin", SuperAdminController.Registration);

// Sub-Admin Registration Router
router.post("/registration-sub-admin", SubAdminController.Registration);

module.exports = router;
