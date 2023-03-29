const FoodModel = require("../../Models/Food/FoodModel");
const CreateFoodService = require("../../Services/Food/CreateFoodService");
const DeleteFoodService = require("../../Services/Food/DeleteFoodService");
const GetFoodService = require("../../Services/Food/GetFoodService");
const GetSingleFoodService = require("../../Services/Food/GetSingleFoodService");
const SearchFoodService = require("../../Services/Food/SearchFoodService");
const UpdateFoodService = require("../../Services/Food/UpdateFoodService");

//! Create Food
exports.CreateFood = async (req, res) => {
  let result = await CreateFoodService(req, FoodModel);
  res.status(200).json(result);
};

//! Get Food
exports.GetFood = async (req, res) => {
  let result = await GetFoodService(req, FoodModel);
  res.status(200).json(result);
};
//! Get single Food
exports.GetSingleFood = async (req, res) => {
  let result = await GetSingleFoodService(req, FoodModel);
  res.status(200).json(result);
};

//! Update Food
exports.UpdateFood = async (req, res) => {
  let result = await UpdateFoodService(req, FoodModel);
  res.status(200).json(result);
};

//! Delete Food
exports.DeleteFood = async (req, res) => {
  let result = await DeleteFoodService(req, FoodModel);
  res.status(200).json(result);
};

//! Search Food By Single Category
exports.SearchFood = async (req, res) => {
  let result = await SearchFoodService(req, FoodModel);
  res.status(200).json(result);
};
