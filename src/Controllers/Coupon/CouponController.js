//! Create Coupon
exports.CreateCoupon = async (req, res) => {
  let result = await CreateCouponService(req, CouponModel);
  res.status(200).json(result);
};

//! Get Coupon
exports.GetCoupon = async (req, res) => {
  let result = await GetCouponService(req, CouponModel);
  res.status(200).json(result);
};
//! Get single Coupon
exports.GetSingleCoupon = async (req, res) => {
  let result = await GetSingleCouponService(req, CouponModel);
  res.status(200).json(result);
};

//! Update Coupon
exports.UpdateCoupon = async (req, res) => {
  let result = await UpdateCouponService(req, CouponModel);
  res.status(200).json(result);
};

//! Delete Coupon
exports.DeleteCoupon = async (req, res) => {
  let result = await DeleteCouponService(req, CouponModel);
  res.status(200).json(result);
};
