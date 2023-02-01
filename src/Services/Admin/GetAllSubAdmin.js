const GetAllSubAdmin = async (request, SubAdminModel) => {
  try {
    let postBody = request.body;
    let data = await SubAdminModel.aggregate([
      {
        $project: {
          email: 1,
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = GetAllSubAdmin;