var CryptoJS = require("crypto-js");
const CreateSubAdmin = async (request, SubAdminModel) => {
  try {
    let postBody = request.body;

    // Encrypt Password
    var password = CryptoJS.AES.encrypt(postBody.password, "key").toString();

    postBody.password = password;

    // Decrypt
    // var bytes = CryptoJS.AES.decrypt(ciphertext, "123");
    // var originalText = bytes.toString(CryptoJS.enc.Utf8);

    let data = await SubAdminModel.create(postBody);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};

module.exports = CreateSubAdmin;
