const { default: mongoose } = require("mongoose");

const GetSingleFoodPhotoService = async (req, model) => {
  try {
    let id = mongoose.Types.ObjectId(req.params.id);
    let data = await model.aggregate([
      {
        $match: { _id: id },
      },
      {
        $match: {},
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetSingleFoodPhotoService;
