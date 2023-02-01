const CreateToken = require("../../Utility/CreateToken");
var CryptoJS = require("crypto-js");
const LoginSubAdmin = async (request, UsersModel) => {
  try {
    let postBody = request.body;
    // Encrypt Password
    var password = CryptoJS.AES.encrypt(postBody.password, "key").toString();
    // postBody.password = password;

    var bytes = CryptoJS.AES.decrypt(
      "U2FsdGVkX1/+alofkxPaw3CUOAvJvO1imeV+1+v64aI=",
      "key"
    );
    var originalText = bytes.toString(CryptoJS.enc.Utf8);


    let data = await UsersModel.aggregate([
      { $match: request.body },
      {
        $project: {
          _id: 0,
          email: 1,
          firstName: 1,
          lastName: 1,
          mobile: 1,
          photo: 1,
        },
      },
    ]);
    if (data.length > 0) {
      let Token = await CreateToken(data[0]["email"]);
      return { status: "Success", Token: Token, data: data[0] };
    } else {
      return { status: "Unauthorized" };
    }
  } catch (e) {
    return { status: "Fail", data: e.toString() };
  }
};

module.exports = LoginSubAdmin;
