const mongoose = require("mongoose");
const GetSingleFoodService = async (request, Model) => {
  try {
    let id = mongoose.Types.ObjectId(request.params.id);
    let data = await Model.aggregate([
      {
        $match: { _id: id },
      },
      {
        $project: {
          foodName: 1,
          foodSlug: 1,
          foodImage: 1,
          foodThumb: 1,
          foodVideo: 1,
          foodQty: 1,
          foodPrice: 1,
          cuisineID: 1,
          foodDiscountPrice: 1,
          foodDiscountPercentage: 1,
          foodDiscountStartDate: 1,
          foodDiscountEndDate: 1,
          foodPortionSize: 1,
          foodPortionSizeUnit: 1,
          foodMinimumOrderQty: 1,
          foodAdditionalInfo: 1,
          foodAdditionalTags: 1,
          foodExpiryTime: 1,
          foodAvailableDays: 1,
          foodAvailableSameDaysEachWeek: 1,
          foodOrderBeforeTime: 1,
          foodRating: 1,
          status: 1,
          foodTypeID: 1,
          categoryID: 1,
          foodLabel: 1,
          customerRequestedFoodQty: 1,
          customerDesireDeliveryDate: 1,
          createdBy: 1,
          createdDate: 1,
          updatedBy: 1,
          updatedDate: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetSingleFoodService;
