var md5 = require("md5");
const CreateSubAdmin = async (request, SubAdminModel) => {
  try {
    let postBody = request.body;

    console.log(md5("message"));
    postBody.password = password;

    let data = await SubAdminModel.create(postBody);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = CreateSubAdmin;
