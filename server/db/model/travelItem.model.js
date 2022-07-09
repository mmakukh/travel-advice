const mongoose = require("mongoose");

const TravelItemSchema = new mongoose.Schema(
  {
    picture: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    subtime: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    length: [
      {
        type: String,
        required: true,
      },
    ],
    address: {
      street: {
        type: String,
        required: true,
      },
      postalCode: {
        type: String,
        required: true,
      },
      city: {
        type: String,
        required: true,
      },
      countryCode: {
        type: String,
        required: true,
      },
      text: {
        type: String,
        required: true,
      },
    },
  },
  { collection: "travel-item" }
);

const TravelItem = mongoose.model("TravelItem", TravelItemSchema);

module.exports = TravelItem;
