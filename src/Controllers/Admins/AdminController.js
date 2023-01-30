const AdminModel = require("../../Models/Admin/AdminModel");
const CreateAdmin = require("../../Services/Admin/CreateAdmin");



//! Registration Supper Admin
exports.Registration = async (req, res) => {
    let result = await CreateAdmin(req, AdminModel);
    res.status(200).json(result);
  };