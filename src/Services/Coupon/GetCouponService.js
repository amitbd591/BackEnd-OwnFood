const GetCouponService = async (req, model) => {
    try {
      let data = await model.aggregate([
        {
          $project: {
            regionID: { type: mongoose.Schema.Types.ObjectId },
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
        },
      ]);

      return { status: "Success", data: data };
    } catch (e) {
      return { status: "Fail", data: e };
    }
  };

  module.exports = GetCouponService;
