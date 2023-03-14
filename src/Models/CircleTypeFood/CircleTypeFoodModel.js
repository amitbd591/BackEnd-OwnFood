const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    circleType: { type: String },
    circleCategoryID: [
      {
        _id: false,
        categoryID: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    circleCountryID: [
      {
        _id: false,
        countryID: { type: mongoose.Schema.Types.ObjectId },
        countryName: { type: String },
        countryFlag: { type: String },
      },
    ],
    circleLimit: { type: Number },
    circleByReview: { type: Boolean },
    bestSellingFood: { type: Boolean },
    circleFoods: { type: Array },
    circleSellerID: [
      {
        _id: false,
        sellerID: { type: mongoose.Schema.Types.ObjectId },
        sellerName: { type: String },
        sellerImage: { type: String },
      },
    ],
  },
  { versionKey: false }
);

const CircleTypeFoodModel = mongoose.model("circle-type-foods", DataSchema);
module.exports = CircleTypeFoodModel;
