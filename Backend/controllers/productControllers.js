import productModel from "./models/productModel.js";
import cloudinary from "./config/cloudinary.js";

const addProduct = async (req, res) => {
  try {
    const { name, category, price, description, image } = req.body;

    const product = await productModel.create({
      name,
      category,
      price,
      description,
      image,
    });

    res.json({
      success: true,
      message: "Product added",
    });

  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
  }
};

const productList = async (req,res) =>{
    try{
          const { name, category, price, description, image } = req.body;

    const productList = await productListModel.find({
      name,
      category,
      price,
      description,
      image,
    });

    res.json({
      success: true,
      message: "ProductList",
  
    });

  } catch (error) {
    res.json({
      success: false,
      message: error.message,
    });
    }
}

export default {addProduct,productList}