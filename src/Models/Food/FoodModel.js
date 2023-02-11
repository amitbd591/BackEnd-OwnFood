const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    cuisineID: { type: Array },
    foodTypeID: {type: mongoose.Schema.Types.ObjectId },
    categoryID: { type: mongoose.Schema.Types.ObjectId },
    foodName: { type: String },
    foodSlug: { type: String },
    foodImage: { type: String },
    foodThumb: { type: String },
    foodVideo: { type: String },
    foodQty: { type: String },
    foodPrice: { type: String },
    foodDiscountPrice: { type: String },
    foodDiscountPercentage: { type: String },
    foodDiscountStartDate: { type: String },
    foodDiscountEndDate: { type: String },
    foodPortionSize: { type: Number },
    foodPortionSizeUnit: { type: String },
    foodMinimumOrderQty: { type: String },
    foodAdditionalInfo: { type: String },
    foodAdditionalTags: { type: Array },
    foodExpiryTime: { type: String },
    foodAvailableDays: { type: Array },
    foodAvailableSameDaysEachWeek: { type: Boolean },
    foodOrderBeforeTime: { type: String },
    foodRating: { type: String },
    status: { type: Boolean },
    foodLabel: { type: Array },
    customerRequestedFoodQty: { type: String },
    customerDesireDeliveryDate: { type: String },
    createdBy: { type: String },
    updatedBy: { type: String },
    BSR: { type: Number },
    createdDate: { type: Date, default: Date.now() },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const FoodModel = mongoose.model("foods", DataSchema);
module.exports = FoodModel;
