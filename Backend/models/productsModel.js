
import mongoose from "mongoose";


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


const productModel = mongoose.model("Product", productSchema)

export default productModel;