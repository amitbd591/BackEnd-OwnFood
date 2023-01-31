const express = require("express");
const router = express.Router();
const SuperAdminController = require("../Controllers/Admins/SuperAdminController");
const SubAdminController = require("../Controllers/Admins/SubAdminController");
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");

//!  ================== ****  Super Admin **** ==================
// Super Admin Registration Router
router.post("/registration-super-admin", SuperAdminController.Registration);
// Super Admin Login Router
router.post("/login-super-admin", SuperAdminController.Login);

//!  ================== ****  Sub Admin **** ==================
// Sub-Admin Registration Router
router.post("/registration-sub-admin", SubAdminController.Registration);
router.get("/get-sub-admin", SubAdminController.GetSubAdmin);

module.exports = router;
