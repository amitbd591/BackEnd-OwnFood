const mongoose = require("mongoose");
const GetFoodByCategoryService = async (req, model) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.id);
    let data = await model.aggregate([
      {
        $match: { _id: id },
      },

      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "categoryID",
          as: "data",
          pipeline: [{ $limit: 5 }],
        },
      },
      {
        $project: {
          data: {
            foodName: 1,
            foodImage: 1,
            sellerID: 1,
            _id: 1,

            foodSlug: 1,
            foodAdditionalInfo: 1,

            foodThumb: 1,
            foodVideo: 1,
            foodQty: 1,
            foodPrice: 1,
          },
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetFoodByCategoryService;
