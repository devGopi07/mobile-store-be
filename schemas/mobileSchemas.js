const mongoose = require("mongoose");

let MobileSchema = new mongoose.Schema(
  {
    url: { type: String, required: true },
    name: { type: String, required: true },
    varient: { type: String, required: true },
    price: { type: String, required: true },
    oprice: { type: String, required: true },
    discount: { type: String },
    createdAt: { type: Date, default: Date.now() },
  },
  {
    collection: "mobiles",
    versionKey: false,
  }
);

let MobileModel = mongoose.model("mobiles", MobileSchema);

module.exports = { MobileModel };
