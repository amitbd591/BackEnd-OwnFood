const CreateAdmin = async (request, AdminModel) => {
  try {
    let postBody = request.body;
    let data = await AdminModel.create(postBody);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = CreateAdmin;
