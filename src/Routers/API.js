const express = require("express");
const router = express.Router();
const SuperAdminController = require("../Controllers/Admins/SuperAdminController");
const SubAdminController = require("../Controllers/Admins/SubAdminController");
const DesignationController = require("../Controllers/Designation/DesignationController");
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");

//!  ================== ****  Super Admin **** ==================
// Super Admin Registration Router
router.post("/registration-super-admin", SuperAdminController.Registration);
// Super Admin Login Router
router.post("/login-super-admin", SuperAdminController.Login);

//!  ================== ****  Sub Admin **** ==================
// Registration Sub-Admin Router
router.post("/registration-sub-admin", SubAdminController.Registration);

// Login Sub-Admin Router
router.post("/login-sub-admin", SubAdminController.Login);

// Get All Sub-Admin Router
router.get("/get-sub-admin", SubAdminController.GetSubAdmin);

// Delete Sub-Admin Router
router.delete("/delete-sub-admin/:id", SubAdminController.DeleteSubAdmin);

// Update Sub-Admin Router
router.post("/update-sub-admin/:id", SubAdminController.UpdateSubAdmin);

//!  ================== ****  Designation Service **** ==================
// Create Designation Router
router.post(
  "/create-designation",
  AuthVerifyMiddleware,
  DesignationController.CreateDesignation
);
// Get Designation Router
router.get(
  "/get-designation",
  AuthVerifyMiddleware,
  DesignationController.GetDesignation
);
// Update Designation Router
router.post(
  "/update-designation/:id",
  AuthVerifyMiddleware,
  DesignationController.UpdateDesignation
);
// Delete Designation Router
router.delete(
  "/delete-designation/:id",
  AuthVerifyMiddleware,
  DesignationController.DeleteDesignation
);

module.exports = router;
