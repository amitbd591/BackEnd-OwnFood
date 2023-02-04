const GetCategroyService = async (request, Model) => {
  try {
    let data = await Model.aggregate([
      {
        $project: {
          categoryName: 1,
          categoryImage: 1,
          categorySlug: 1,
          categoryStatus: 1,
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

module.exports = GetCategroyService;
