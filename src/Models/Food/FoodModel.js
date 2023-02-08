const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    foodName: { type: String },
    foodSlug: { type: String },
    foodImage: { type: String },
    foodThumb: { type: String },
    foodVideo: { type: String },
    foodQty: { type: String },
    foodPrice: { type: String },
    cuisineID: { type: String },
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
    foodTypeID: { type: String },
    categoryID: { type: String },
    foodLabel: { type: Array },
    customerRequestedFoodQty: { type: String },
    customerDesireDeliveryDate: { type: String },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const FoodModel = mongoose.model("foods", DataSchema);
module.exports = FoodModel;
