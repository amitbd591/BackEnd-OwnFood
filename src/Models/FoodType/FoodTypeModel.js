const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    foodTypeName: { type: String },
    foodTypeImage: { type: String },
    foodTypeCategories: { type: String },
    status: { type: String },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const FoodTypeModel = mongoose.model("foodTypes", DataSchema);
module.exports = FoodTypeModel;
