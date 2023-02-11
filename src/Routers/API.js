const express = require("express");
const router = express.Router();
const AuthVerifyMiddleware = require("../Middlewares/AuthVerifyMiddleware");
const SuperAdminController = require("../Controllers/Admins/SuperAdminController");
const SubAdminController = require("../Controllers/Admins/SubAdminController");
const DesignationController = require("../Controllers/Designation/DesignationController");
const CategoryController = require("../Controllers/Category/CategoryController");
const SubCategoryController = require("../Controllers/SubCategory/SubCategoryController");
const FoodTypeController = require("../Controllers/FoodType/FoodTypeController");
const PortionSizeUnitController = require("../Controllers/PortionSizeUnit/PortionSizeUnitController");
const OrderStatusController = require("../Controllers/OrderStatus/OrderStatusController");
const CuisineController = require("../Controllers/Cuisine/CuisineController");
const IngrediantsController = require("../Controllers/Ingrediants/IngrediantsController");
const AdditionalTagsController = require("../Controllers/AdditionalTags/AdditionalTagsController");
const BonusFreeItemController = require("../Controllers/BonusFreeItem/BonusFreeItemController");
const FoodItemController = require("../Controllers/Food/FoodController");
const CountryController = require("../Controllers/Country/CountryController");
const Region_StateController = require("../Controllers/Region_State/Region_StateController");

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

//!  ================== ****  Sub Category **** ==================
// Create subcategory Router
router.post(
  "/create-subcategory",
  AuthVerifyMiddleware,
  SubCategoryController.CreateSubCategory
);

//get subcategory
router.get(
  "/get-subcategory",
  AuthVerifyMiddleware,
  SubCategoryController.GetSubCategory
);

//single subcategory
router.get(
  "/get-single-subcategory/:id",
  AuthVerifyMiddleware,
  SubCategoryController.GetSingleSubCategory
);

//update subcategory
router.post(
  "/update-subcategory/:id",
  AuthVerifyMiddleware,
  SubCategoryController.UpdateSubCategory
);

//delete subcategory
router.delete(
  "/delete-subcategory/:id",
  AuthVerifyMiddleware,
  SubCategoryController.DeleteSubCategory
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

//!  ================== ****  Additional Tags  **** ==================

//create additional tag router
router.post(
  "/create-additionaltags",
  AuthVerifyMiddleware,
  AdditionalTagsController.CreateAdditionalTag
);

//get additional tag router
router.get(
  "/get-additionaltags",
  AuthVerifyMiddleware,
  AdditionalTagsController.GetAdditionalTag
);

//get single additional tag
router.get(
  "/get-singleadditionaltags/:id",
  AuthVerifyMiddleware,
  AdditionalTagsController.GetSingleAdditionalTag
);

//update additional tag router
router.post(
  "/update-additionaltags/:id",
  AuthVerifyMiddleware,
  AdditionalTagsController.UpdateAdditionalTag
);

//delete additional tag
router.delete(
  "/delete-additionaltags/:id",
  AuthVerifyMiddleware,
  AdditionalTagsController.DeleteAdditionalTag
);

//!  ================== ****  Bonus Free Item  **** ==================

//create bonus free item
router.post(
  "/create-bonus-freeitem",
  AuthVerifyMiddleware,
  BonusFreeItemController.CreateBonusFreeItem
);

//get bonus free item
router.get(
  "/get-bonus-freeitem",
  AuthVerifyMiddleware,
  BonusFreeItemController.GetBonusFreeItem
);

//get single bonus free item
router.get(
  "/get-single-bonus-freeitem/:id",
  AuthVerifyMiddleware,
  BonusFreeItemController.GetSingleBonusFreeItem
);

//update bonus free item
router.post(
  "/update-bonus-freeitem/:id",
  AuthVerifyMiddleware,
  BonusFreeItemController.UpdateBonusFreeItem
);

//delete bonus free item
router.delete(
  "/delete-bonus-freeitem/:id",
  AuthVerifyMiddleware,
  BonusFreeItemController.DeleteBonusFreeItem
);

//!  ================== ****  Food  **** ==================

//create Food item
router.post(
  "/create-food",
  AuthVerifyMiddleware,
  FoodItemController.CreateFood
);

//get Food item
router.get("/get-food", AuthVerifyMiddleware, FoodItemController.GetFood);

//get single Food item
router.get(
  "/get-single-food/:id",
  AuthVerifyMiddleware,
  FoodItemController.GetSingleFood
);

//update Food item
router.post(
  "/update-food/:id",
  AuthVerifyMiddleware,
  FoodItemController.UpdateFood
);

//delete Food item
router.delete(
  "/delete-food/:id",
  AuthVerifyMiddleware,
  FoodItemController.DeleteFood
);

//!  ================== ****  Country  **** ==================

//create Country
router.post(
  "/create-country",
  AuthVerifyMiddleware,
  CountryController.CreateCountry
);

//get Country
router.get("/get-country", AuthVerifyMiddleware, CountryController.GetCountry);

//get single Country
router.get(
  "/get-single-country/:id",
  AuthVerifyMiddleware,
  CountryController.GetSingleCountry
);

//update Country
router.post(
  "/update-country/:id",
  AuthVerifyMiddleware,
  CountryController.UpdateCountry
);

//delete Country
router.delete(
  "/delete-country/:id",
  AuthVerifyMiddleware,
  CountryController.DeleteCountry
);

//!  ================== ****  Region_State  **** ==================

//create Region_State
router.post(
  "/create-region-state",
  AuthVerifyMiddleware,
  Region_StateController.CreateRegion_State
);

// //get Region_State
// router.get("/get-region-state", AuthVerifyMiddleware, CountryController.GetCountry);

// //get single Region_State
// router.get(
//   "/get-single-region-state/:id",
//   AuthVerifyMiddleware,
//   CountryController.GetSingleCountry
// );

// //update Region_State
// router.post(
//   "/update-region-state/:id",
//   AuthVerifyMiddleware,
//   CountryController.UpdateCountry
// );

// //delete Region_State
// router.delete(
//   "/delete-region-state/:id",
//   AuthVerifyMiddleware,
//   CountryController.DeleteCountry
// );

module.exports = router;
