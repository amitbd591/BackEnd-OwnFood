const mongoose = require("mongoose");
const FilterFoodService = async (request, Model) => {
  try {
    let postBody = request.body;
    let categoryID = mongoose.Types.ObjectId(request.body.categoryID);
    let foodAdditionalTags = request.body.foodAdditionalTags;
    let foodPrice = request.body.foodPrice;
    let foodRating = request.body.foodRating;

    let data = await Model.aggregate([
      {
        $match: {
          categoryID: categoryID,
        },
      },

      {
        $match: {
          $and: [
            {
              foodAdditionalTags: foodAdditionalTags[0],
            },
            { foodPrice: { $lt: foodPrice } },
            { foodRating: { $lt: foodRating } },
          ],
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = FilterFoodService;
