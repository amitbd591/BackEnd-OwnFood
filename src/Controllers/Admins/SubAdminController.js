const SubAdminModel = require("../../Models/Admin/SubAdminModel");
const CreateSubAdmin = require("../../Services/Admin/CreateSubAdmin");
const GetAllSubAdmin = require("../../Services/Admin/GetAllSubAdmin");
const LoginSubAdmin = require("../../Services/Admin/LoginSubAdmin");

//! Registration Sub-Admin
exports.Registration = async (req, res) => {
  let result = await CreateSubAdmin(req, SubAdminModel);
  res.status(200).json(result);
};

//! Login Supper Admin
exports.Login = async (req, res) => {
  let result = await LoginSubAdmin(req, SubAdminModel);
  res.status(200).json(result);
};

//! Get All Sub-Admin
exports.GetSubAdmin = async (req, res) => {
  let result = await GetAllSubAdmin(req, SubAdminModel);
  res.status(200).json(result);
};
