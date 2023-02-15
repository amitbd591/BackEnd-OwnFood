const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    couponCode: { type: String },
    couponStartDate: { type: String },
    couponEndDate: { type: String },
    couponAmount: { type: String },
    couponIsPercentage: { type: String },
    couponMinPurchase: { type: String },
    couponForAll: { type: String },
    codeForUserIDs: { type: Array },

    createdBy: { type: String },
    createdDate: { type: Date, default: Date.now() },
    updatedBy: { type: String },
    updatedDate: { type: Date, default: Date.now() },
  },
  { versionKey: false }
);

const CouponModel = mongoose.model("coupons", DataSchema);
module.exports = CouponModel;
