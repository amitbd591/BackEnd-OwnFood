const express = require("express");
const router = express.Router();
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");
const SuperAdminController = require("../Controllers/Admins/SuperAdminController");
const SubAdminController = require("../Controllers/Admins/SubAdminController");
const DesignationController = require("../Controllers/Designation/DesignationController");
const CategoryController = require("../Controllers/Category/CategoryController");
const FoodTypeController = require("../Controllers/FoodType/FoodTypeController");
const PortionSizeUnitController = require("../Controllers/PortionSizeUnit/PortionSizeUnitController");
const OrderStatusController = require("../Controllers/OrderStatus/OrderStatusController");
const CuisineController = require("../Controllers/Cuisine/CuisineController");
const IngrediantsController = require("../Controllers/Ingrediants/IngrediantsController");

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

// Get Single Designation Router
router.get(
  "/get-single-designation/:id",
  AuthVerifyMiddleware,
  DesignationController.GetSingleDesignation
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

//!  ================== ****  CreatePortionSizeUnit **** ==================

// Create PortionSizeUnit Router
router.post(
  "/create-portionSizeUnit",
  AuthVerifyMiddleware,
  PortionSizeUnitController.CreatePortionSizeUnit
);

// Get PortionSizeUnit Router
router.get(
  "/get-portionSizeUnit",
  AuthVerifyMiddleware,
  PortionSizeUnitController.GetPortionSizeUnit
);
// Get Single PortionSizeUnit Router
router.get(
  "/get-single-portionSizeUnit/:id",
  AuthVerifyMiddleware,
  PortionSizeUnitController.GetSinglePortionSizeUnit
);

// Update PortionSizeUnit Router
router.post(
  "/update-portionSizeUnit/:id",
  AuthVerifyMiddleware,
  PortionSizeUnitController.UpdatePortionSizeUnit
);

// Delete PortionSizeUnit Router
router.delete(
  "/delete-portionSizeUnit/:id",
  AuthVerifyMiddleware,
  PortionSizeUnitController.DeletePortionSizeUnit
);

//!  ================== ****  OrderStatus **** ==================

// Create OrderStatus Router
router.post(
  "/create-orderStatus",
  AuthVerifyMiddleware,
  OrderStatusController.CreateOrderStatus
);

// Get OrderStatus Router
router.get(
  "/get-orderStatus",
  AuthVerifyMiddleware,
  OrderStatusController.GetOrderStatus
);
// Get Single OrderStatus Router
router.get(
  "/get-single-orderStatus/:id",
  AuthVerifyMiddleware,
  OrderStatusController.GetSingleOrderStatus
);

// Update OrderStatus Router
router.post(
  "/update-orderStatus/:id",
  AuthVerifyMiddleware,
  OrderStatusController.UpdateOrderStatus
);

// Delete OrderStatus Router
router.delete(
  "/delete-orderStatus/:id",
  AuthVerifyMiddleware,
  OrderStatusController.DeleteOrderStatus
);

//!  ================== ****  Cuisine **** ==================

// Create Cuisine Router
router.post(
  "/create-cuisine",
  AuthVerifyMiddleware,
  CuisineController.CreateCuisine
);

// Get Cuisine Router
router.get("/get-cuisine", AuthVerifyMiddleware, CuisineController.GetCuisine);
// Get Single Cuisine Router
router.get(
  "/get-single-cuisine/:id",
  AuthVerifyMiddleware,
  CuisineController.GetSingleCuisine
);

// Update Cuisine Router
router.post(
  "/update-cuisine/:id",
  AuthVerifyMiddleware,
  CuisineController.UpdateCuisine
);

// Delete Cuisine Router
router.delete(
  "/delete-cuisine/:id",
  AuthVerifyMiddleware,
  CuisineController.DeleteCuisine
);

//!  ================== ****  Ingrediants **** ==================

// Create Ingrediants Router
router.post(
  "/create-ingrediants",
  AuthVerifyMiddleware,
  IngrediantsController.CreateIngrediants
);

// Get Ingrediants Router
router.get(
  "/get-ingrediants",
  AuthVerifyMiddleware,
  IngrediantsController.GetIngrediants
);
// Get Single Ingrediants Router
router.get(
  "/get-single-ingrediants/:id",
  AuthVerifyMiddleware,
  IngrediantsController.GetSingleIngrediants
);

// Update Ingrediants Router
router.post(
  "/update-ingrediants/:id",
  AuthVerifyMiddleware,
  IngrediantsController.UpdateIngrediants
);

// Delete Ingrediants Router
router.delete(
  "/delete-ingrediants/:id",
  AuthVerifyMiddleware,
  IngrediantsController.DeleteIngrediants
);
module.exports = router;
