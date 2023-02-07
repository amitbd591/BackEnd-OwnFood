const mongoose = require("mongoose");
const GetSingleCuisineService = async (request, Model) => {
  try {
    let id = mongoose.Types.ObjectId(request.params.id);
    let data = await Model.aggregate([
      {
        $match: { _id: id },
      },
      {
        $addFields: {
          Id: { $toString: "$_id" },
        },
      },
      {
        $lookup: {
          from: "ingrediants",
          localField: "Id",
          foreignField: "cuisineID",
          as: "ingrediantsData",
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetSingleCuisineService;
