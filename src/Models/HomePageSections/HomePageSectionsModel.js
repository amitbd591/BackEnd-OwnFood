const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    sectionTitle1: { type: String },
    sectionTitle2: { type: String },
    sectionTitle3: { type: String },
    sectionTitle4: { type: String },
    sectionStyle: { type: String },
    sectionCategoriesColor: { type: Array },
    orderBy: { type: Number },
    status: { type: Boolean },
    adImage: { type: String },
    adUrl: { type: String },
    adCode: { type: String },
    displayLimit: { type: Number },
    isSellerByReviews: { type: Boolean },
    isSellerByFeatured: { type: Boolean },

    sectionCategories1: [
      {
        title: { type: String },
        categoryID: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    sectionCategories2: [
      {
        title: { type: String },
        categoryID: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    sectionCategories3: [
      {
        title: { type: String },
        categoryID: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    sectionCategories4: [
      {
        title: { type: String },
        categoryID: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const HomePageSectionModel = mongoose.model("home-page-sections", DataSchema);
module.exports = HomePageSectionModel;
