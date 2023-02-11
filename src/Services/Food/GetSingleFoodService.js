const mongoose = require("mongoose");
const GetSingleFoodService = async (request, Model) => {
  try {
    let id = mongoose.Types.ObjectId(request.params.id);
    let data = await Model.aggregate([
      {
        $match: { _id: id },
      },
      {
        $lookup: {
          from: "foodtypes",
          localField: "foodTypeID",
          foreignField: "_id",
          as: "foodtypes",
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetSingleFoodService;
