const mongoose = require("mongoose");
const GetSingleFoodService = async (request, Model) => {
  try {
    let id = mongoose.Types.ObjectId(request.params.id);
    let data = await Model.aggregate([
      {
        $match: { _id: id },
      },
      {
        $addFields: {
          Id: { $toString: "$_id" },
          cuisineIDStr: { $toString: "$cuisineID" },
        },
      },
      // Join together local cuisineID to foreign cuisineID (cuisines Model)
      {
        $lookup: {
          from: "cuisines",
          localField: "cuisineIDStr",
          foreignField: "cuisineID",
          as: "cuisineData",
        },
      },
      { $unwind: "$cuisineData" },
      // Join together local cuisineID to foreign cuisineID (ingrediants Model)
      {
        $lookup: {
          from: "ingrediants",
          localField: "cuisineIDStr",
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

module.exports = GetSingleFoodService;
