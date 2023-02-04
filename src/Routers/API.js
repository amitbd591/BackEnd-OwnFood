const express = require("express");
const router = express.Router();
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");
const SuperAdminController = require("../Controllers/Admins/SuperAdminController");
const SubAdminController = require("../Controllers/Admins/SubAdminController");
const DesignationController = require("../Controllers/Designation/DesignationController");
const CategoryController = require("../Controllers/Category/CategoryController");
const FoodTypeController = require("../Controllers/FoodType/FoodTypeController");

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

//!  ================== ****  Category Service **** ==================

// Create Category Router
router.post(
  "/create-category",
  AuthVerifyMiddleware,
  CategoryController.CreateCategory
);

// Get Category Router
router.get(
  "/get-category",
  AuthVerifyMiddleware,
  CategoryController.GetCategory
);
// Get Single Category Router
router.get(
  "/get-single-category/:id",
  AuthVerifyMiddleware,
  CategoryController.GetSingleCategory
);

// Update Category Router
router.post(
  "/update-category/:id",
  AuthVerifyMiddleware,
  CategoryController.UpdateCategory
);

// Delete Category Router
router.delete(
  "/delete-category/:id",
  AuthVerifyMiddleware,
  CategoryController.DeleteCategory
);

//!  ================== ****  FoodType **** ==================

// Create FoodType Router
router.post(
  "/create-foodType",
  AuthVerifyMiddleware,
  FoodTypeController.CreateFoodType
);

// Get FoodType Router
router.get(
  "/get-foodType",
  AuthVerifyMiddleware,
  FoodTypeController.GetFoodType
);
// Get Single FoodType Router
router.get(
  "/get-single-foodType/:id",
  AuthVerifyMiddleware,
  FoodTypeController.GetSingleFoodType
);

// Update FoodType Router
router.post(
  "/update-foodType/:id",
  AuthVerifyMiddleware,
  FoodTypeController.UpdateFoodType
);

// Delete FoodType Router
router.delete(
  "/delete-foodType/:id",
  AuthVerifyMiddleware,
  FoodTypeController.DeleteFoodType
);
module.exports = router;
