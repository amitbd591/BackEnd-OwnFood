const GetCircleTypeFoodService = async (req, model) => {
  try {
    let data = await model.aggregate([
      {
        $match: {},
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetCircleTypeFoodService;
