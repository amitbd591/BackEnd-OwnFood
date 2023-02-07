const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    categoryName: { type: String },
    categoryImage: { type: String },
    categorySlug: { type: String },
    status: { type: String },
    categoryID: { type: String },

    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const SubCategoryModel = mongoose.model("sub-categories", DataSchema);
module.exports = SubCategoryModel;
