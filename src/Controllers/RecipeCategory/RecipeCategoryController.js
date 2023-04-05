const RecipeCategoryModel = require("../../Models/RecipeCategory/RecipeCategoryModel");
const CreateRecipeCategoryService = require("../../Services/RecipeCategory/CreateRecipeCategoryService");
const DeleteRecipeCategoryService = require("../../Services/RecipeCategory/DeleteRecipeCategoryService");
const GetRecipeCategoryService = require("../../Services/RecipeCategory/GetRecipeCategoryService");
const GetSingleRecipeCategoryService = require("../../Services/RecipeCategory/GetSingleRecipeCategoryService");
const UpdateRecipeCategoryService = require("../../Services/RecipeCategory/UpdateRecipeCategoryService");

//!create RecipeCategory
exports.CreateRecipeCategory = async (req, res) => {
  let result = await CreateRecipeCategoryService(req, RecipeCategoryModel);
  res.status(200).json(result);
};

//!get RecipeCategory
exports.GetRecipeCategory = async (req, res) => {
  let result = await GetRecipeCategoryService(req, RecipeCategoryModel);
  res.status(200).json(result);
};

//!get single RecipeCategory
exports.GetSingleRecipeCategory = async (req, res) => {
  let result = await GetSingleRecipeCategoryService(req, RecipeCategoryModel);
  res.status(200).json(result);
};

//!update RecipeCategory
exports.UpdateRecipeCategory = async (req, res) => {
  let result = await UpdateRecipeCategoryService(req, RecipeCategoryModel);
  res.status(200).json(result);
};

//!delete RecipeCategory
exports.DeleteRecipeCategory = async (req, res) => {
  let result = await DeleteRecipeCategoryService(req, RecipeCategoryModel);
  res.status(200).json(result);
};
