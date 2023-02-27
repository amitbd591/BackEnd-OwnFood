const UsersModel = require("../../Models/Users/UsersModel");
const OTPModel = require("../../Models/Users/OTPModel");
const CreateUsersService = require("../../Services/Users/CreateUsersService");
const DeleteUsersService = require("../../Services/Users/DeleteUsersService");
const GetSingleUsersService = require("../../Services/Users/GetSingleUsersService");
const GetUsersService = require("../../Services/Users/GetUsersService");
const UpdateUsersService = require("../../Services/Users/UpdateUsersService");
const VerifyForgetPassService = require("../../Services/Users/VerifyForgetPassService");

//! Create Users
exports.CreateUsers = async (req, res) => {
  let result = await CreateUsersService(req, UsersModel);

  res.status(200).json(result);
};
//! get Users
exports.GetUsers = async (req, res) => {
  let result = await GetUsersService(req, UsersModel);
  res.status(200).json(result);
};
//! update Users
exports.UpdateUsers = async (req, res) => {
  let result = await UpdateUsersService(req, UsersModel);
  res.status(200).json(result);
};
//! delete Users

exports.DeleteUsers = async (req, res) => {
  let result = await DeleteUsersService(req, UsersModel);
  res.status(200).json(result);
};

//! get single Users
exports.GetSingleUsers = async (req, res) => {
  let result = await GetSingleUsersService(req, UsersModel);
  res.status(200).json(result);
};

//! verify Email Address For forget Password
exports.ForgetPassVerifyEmail = async (req, res) => {
  let result = await VerifyForgetPassService(req, UsersModel);
  res.status(200).json(result);
};
