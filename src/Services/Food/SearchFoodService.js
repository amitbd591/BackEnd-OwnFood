const mongoose = require("mongoose");
const SearchFoodService = async (request, Model) => {
  try {
    let postBody = request.body;
    let categoryID = mongoose.Types.ObjectId(request.body.categoryID);
    let foodAdditionalTags = request.body.foodAdditionalTags;
    let SearchRgx = { $regex: postBody, $options: "i" };
    let SearchQuery = {
      $or: [{ productName: SearchRgx }],
    };
    let data = await Model.aggregate([
      // {
      //   $facet: {
      //     Total: [{ $match: SearchQuery }, { $count: "count" }],
      //     Rows: [
      //       { $match: SearchQuery },
      //       { $skip: skipRow },
      //       { $limit: perPage },
      //     ],
      //   },
      // },
      {
        $match: {
          categoryID: categoryID,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = SearchFoodService;
