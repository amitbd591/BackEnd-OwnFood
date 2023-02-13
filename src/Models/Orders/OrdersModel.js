const mongoose = require("mongoose");

const DataSchema = mongoose.Schema(
  {
    orderDeliveryAddressID: { type: mongoose.Schema.Types.ObjectId },
    orderBillingAddressID: { type: mongoose.Schema.Types.ObjectId },
    orderStatusID: { type: mongoose.Schema.Types.ObjectId },
    customerID: { type: mongoose.Schema.Types.ObjectId },
    orderNumber: { type: String },
    orderNotes: { type: String },
    orderTotalAmount: { type: Number },
    orderDate: { type: Date, default: Date.now() },
    paymentDate: { type: Date, default: Date.now() },
    orderItems: [
      {
        foodID: { type: mongoose.Schema.Types.ObjectId },
        foodName: { type: String },
        foodQty: { type: String },
        foodUnitPrice: { type: String },
        foodTotalPrice: { type: String },
        kitchenName: { type: String },
        sellerID: { type: mongoose.Schema.Types.ObjectId },
      },
    ],
    paymentType: { type: String },
  },
  { versionKey: false }
);

const OrdersModel = mongoose.model("orders", DataSchema);
module.exports = OrdersModel;
