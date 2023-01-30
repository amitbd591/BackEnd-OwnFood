const SubAdminModel = require("../../Models/Admin/SubAdminModel");
const CreateSubAdmin = require("../../Services/Admin/CreateSubAdmin");

//! Registration Sub-Admin
exports.Registration = async (req, res) => {
  let result = await CreateSubAdmin(req, SubAdminModel);
  res.status(200).json(result);
};
