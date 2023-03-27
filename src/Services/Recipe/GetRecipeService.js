const GetRecipeService = async (req, model) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.id);
    let data = await model.aggregate([
      {
        $lookup: {
          from: "become-a-sellers",
          localField: "sellerID",
          foreignField: "_id",
          as: "seller",
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetRecipeService;
