const mongoose = require("mongoose");
const Schema = mongoose.Schema;
var uniqueValidator = require("mongoose-unique-validator");
const DataSchema = new Schema(
  {
    email: { type: String, required: true, index: true, unique: true },
    firstName: { type: String },
    lastName: { type: String },
    mobile: { type: String },
    password: { type: String },
    photo: { type: String },
    createdDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

// DataSchema.plugin(uniqueValidator);

const UsersModel = mongoose.model("Admin", DataSchema);
module.exports = UsersModel;
