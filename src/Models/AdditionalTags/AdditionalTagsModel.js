const mongoose = require("mongoose");
const DataSchema = mongoose.Schema(
  {
    tagID: { type: String },
    tagName: { type: String },
    status: { type: Boolean },
    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  {
    versionKey: false,
  }
);
const AdditionalTagsModel = mongoose.model("additional-tags", DataSchema);
module.exports = AdditionalTagsModel;
