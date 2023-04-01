const mongoose = require("mongoose");
const FilterFoodService = async (request, Model) => {
  try {
    let categoryID = mongoose.Types.ObjectId(request.body.categoryID);
    let foodAdditionalTags = request.body.foodAdditionalTags;
    let foodPrice = request.body.foodPrice;
    let foodRating = request.body.foodRating;

    let postBody = {};
    let innerData = {};
    // if (foodAdditionalTags[0] !== 0) {
    //   postBody.foodAdditionalTags[0] = foodAdditionalTags;
    // }
    if (foodPrice !== 0) {
      postBody.foodPrice = foodPrice;
      innerData.foodPrice = { $lt: postBody.foodPrice };
    }
    if (foodRating !== 0) {
      postBody.foodRating = foodRating;
      innerData.foodRating = { $lt: postBody.foodRating };
    }

    let data = await Model.aggregate([
      {
        $match: {
          categoryID: categoryID,
        },
      },

      {
        $match: {
          $and: [innerData],
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = FilterFoodService;
