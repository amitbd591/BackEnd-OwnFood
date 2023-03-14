const BecomeSellerModel = require("../../Models/BecomeSeller/BecomeSellerModel");
const CreateBecomeSellerService = require("../../Services/BecomeSeller/CreateBecomeSellerService");
const DeleteBecomeSellerService = require("../../Services/BecomeSeller/DeleteBecomeSellerService");
const GetBecomeSellerService = require("../../Services/BecomeSeller/GetBecomeSellerService");
const GetSellerWithFoodDetailsService = require("../../Services/BecomeSeller/GetSellerWithFoodDetailsService");
const GetSingleBecomeSellerService = require("../../Services/BecomeSeller/GetSingleBecomeSellerService");
const UpdateBecomeSellerService = require("../../Services/BecomeSeller/UpdateBecomeSellerService");

//create become a seller
exports.CreateBecomeSeller = async (req, res) => {
  let result = await CreateBecomeSellerService(req, BecomeSellerModel);
  res.status(200).json(result);
};

//get become e seller
exports.GetBecomeSeller = async (req, res) => {
  let result = await GetBecomeSellerService(req, BecomeSellerModel);
  res.status(200).json(result);
};

//get single become a seller
exports.GetSingleBecomeSeller = async (req, res) => {
  let result = await GetSingleBecomeSellerService(req, BecomeSellerModel);
  res.status(200).json(result);
};

//update become a seller
exports.UpdateBecomeSeller = async (req, res) => {
  let result = await UpdateBecomeSellerService(req, BecomeSellerModel);
  res.status(200).json(result);
};

//delete become a seller
exports.DeleteBecomeSeller = async (req, res) => {
  let result = await DeleteBecomeSellerService(req, BecomeSellerModel);
  res.status(200).json(result);
};

// Get Multiple Seller With Food Details
exports.GetSellerWithFoodDetails = async (req, res) => {
  let result = await GetSellerWithFoodDetailsService(req, BecomeSellerModel);
  res.status(200).json(result);
};
