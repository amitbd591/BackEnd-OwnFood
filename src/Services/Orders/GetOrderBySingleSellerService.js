const { default: mongoose } = require("mongoose");
const CityModel = require("../../Models/City/CityModel");

const GetOrderBySingleSellerService = async (req, model) => {
  try {
    let ID = mongoose.Types.ObjectId(req.params.id);
    let data = await model.aggregate([
      {
        $match: {
          sellerID: ID,
        },
      },
      {
        $lookup: {
          from: "become-a-sellers",
          localField: "sellerID",
          foreignField: "_id",
          as: "seller_Info",
          pipeline: [
            {
              $project: {
                sellerNationalityID: 1,
                sellerProfilePhoto: 1,
                kitchenImages: 1,
                kitchenName: 1,
                sellerNationality: 1,
                sellerNationalityByBorn: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "users",
          localField: "customerID",
          foreignField: "_id",
          as: "userInfo",
          pipeline: [
            {
              $project: {
                userFullName: 1,
                userName: 1,
                userEmail: 1,
                userMobileNo: 1,
                userPhoto: 1,
                zipCode: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "addressbooks",
          localField: "orderDeliveryAddressID",
          foreignField: "_id",
          as: "deliveryAddress",
          pipeline: [
            {
              $project: {
                cityID: 1,
                regionID: 1,
                countryID: 1,
                addressText: 1,
                addressType: 1,
                shippingDefault: 1,
                billingDefault: 1,
                latitude: 1,
                logitude: 1,
                zipCode: 1,
                status: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "addressbooks",
          localField: "orderBillingAddressID",
          foreignField: "_id",
          as: "billingAddress",
          pipeline: [
            {
              $project: {
                cityID: 1,
                regionID: 1,
                countryID: 1,
                addressText: 1,
                addressType: 1,
                shippingDefault: 1,
                billingDefault: 1,
                latitude: 1,
                logitude: 1,
                zipCode: 1,
                status: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "orderstatuses",
          localField: "orderStatusID",
          foreignField: "_id",
          as: "orderStatus",
        },
      },
      {
        $lookup: {
          from: "citys",
          localField: "deliveryAddress.cityID",
          foreignField: "_id",
          as: "deliveryAddressCity",
          pipeline: [
            {
              $project: {
                cityName: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "citys",
          localField: "billingAddress.cityID",
          foreignField: "_id",
          as: "billingAddressCity",
          pipeline: [
            {
              $project: {
                cityName: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "countries",
          localField: "deliveryAddress.countryID",
          foreignField: "_id",
          as: "deliveryAddressCountry",
          pipeline: [
            {
              $project: {
                countryName: 1,
                countryCode: 1,
                countryCapital: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "countries",
          localField: "billingAddress.countryID",
          foreignField: "_id",
          as: "billingAddressCountry",
          pipeline: [
            {
              $project: {
                countryName: 1,
                countryCode: 1,
                countryCapital: 1,
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "regionstates",
          localField: "deliveryAddress.regionID",
          foreignField: "_id",
          as: "deliveryAddressRegion",
          pipeline: [
            {
              $project: {
                regionName: 1,
                // deliveryAddressRegion: {
                //   $arrayElemAt: ["$deliveryAddressRegion", 0]
                // }
              },
            },
          ],
        },
      },
      {
        $lookup: {
          from: "regionstates",
          localField: "billingAddress.regionID",
          foreignField: "_id",
          as: "billingAddressRegion",
          pipeline: [
            {
              $project: {
                regionName: 1,
                // billingAddressRegion: {
                //   $arrayElemAt: ["$billingAddressRegion", 0]
                // },
              },
            },
          ],
        },
      },
      {
        $project: {
          orderNumber: 1,
          orderNotes: 1,
          orderTotalAmount: 1,
          orderDate: 1,
          paymentDate: 1,
          orderStatusID: 1,
          orderBillingAddressID: 1,
          orderStatusID: 1,
          orderDeliveryAddressID: 1,
          paymentType: 1,
          orderItems: 1,
          seller_Info: 1,
          userInfo: 1,
          orderStatus: 1,
          deliveryAddress: 1,
          deliveryAddressItem: {
            $concatArrays: [
              "$deliveryAddress",
              "$deliveryAddressCity",
              "$deliveryAddressRegion",
              "$deliveryAddressCountry",
            ],
          },
          billingAddressItem: [
            "$billingAddress",
            "$billingAddressCity",
            "$billingAddressRegion",
            "$billingAddressCountry",
          ],
        },
      },
    ]);
    return { status: "Success", data: data };
  } catch (e) {
    return { status: "Fail", data: e };
  }
};
module.exports = GetOrderBySingleSellerService;
