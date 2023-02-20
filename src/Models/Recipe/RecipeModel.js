const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    recipeName: { type: String },
    preparationTime: { type: Date, default: Date.now() },
    ingredients: [
      {
        Qty: { type: String },
        qtyUnit: { type: String },
        ingredientsName: { type: String },
        ingredientsID: { type: mongoose.Types.ObjectId },
      },
    ],
    recipeSteps: [
      {
        stepName: { type: String },
        Photo: { type: String },
        Video: { type: String },
      },
    ],
    recipeTips: { type: String },
    isMyOwnRecipe: { type: Boolean },
    viewCount: { type: Number },
    likeCount: { type: Number },
    shareCount: { type: Number },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },

  { versionKey: false }
);

const Recipe = mongoose.model("recipe", DataSchema);

module.exports = Recipe;
