const UsersModel = require("../../Models/Users/UsersModel");
const UserCreateService = require("../../Services/User/UserCreateService");

//! Registration Function
exports.Registration = async (req, res) => {
  let result = await UserCreateService(req, UsersModel);
  res.status(200).json(result);
};
