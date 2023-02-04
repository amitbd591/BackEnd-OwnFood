const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    categoryName: { type: String },
    categoryImage: { type: String },
    categorySlug: { type: String, unique: true },
    status: { type: Boolean },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const CategoryModel = mongoose.model("categorys", DataSchema);
module.exports = CategoryModel;
