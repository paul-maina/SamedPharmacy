

import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  {
    timestamps: true,
  }
);

const productSchema = mongoose.Schema(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    category: String,
    description: String,
    price: Number,
    image: String
  }
);

const userModel = mongoose.model("User", userSchema);
const productModel = mongoose.model("Product", productSchema)

export default {
  userModel,
  productModel,
};