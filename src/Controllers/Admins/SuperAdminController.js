const SuperAdminModel = require("../../Models/Admin/SuperAdminModel");
const CreateAdmin = require("../../Services/Admin/CreateSuperAdmin");



//! Registration Supper Admin
exports.Registration = async (req, res) => {
    let result = await CreateAdmin(req, SuperAdminModel);
    res.status(200).json(result);
  };