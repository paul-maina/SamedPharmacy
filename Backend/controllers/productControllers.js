import productModel from "./models/productModel.js";
import cloudinary from "./config/cloudinary.js";

const addProduct = async (req, res) => {
  try {
        const { name, category, price, description } = req.body;

        const image = req.file;
        let imageUrl = "";

        if (image) {
          const result = await cloudinary.uploader.upload(image.path, {
            resource_type: "image",
          });

          imageUrl = result.secure_url;
        } else {
          imageUrl = "https://via.placeholder.com/150";
        }

        const productData = {
          name,
          category,
          price: Number(price),
          description,
          image: imageUrl,
          date: Date.now(),
        };

        const product = new productModel(productData);

        await product.save();

        res.json({
          success: true,
          message: "Product added",
        });

      } catch (error) {
        console.log(error); 
        
        res.json({
          success: false,
          message: error.message,
        });
      }
    };

const getProduct = async (req, res) => {
  try {
        const { name, category, price, description} = req.query;

        let filter = {};

        if (name) {
          filter.name = { $regex: name, $options: "i" };
        }

        if (category) {
          filter.category = {$regex: category, $options: "i"}
        }

        if (description) {
          filter.description = { $regex: description, $options: "i" };
        }

        if (price) {
          filter.price = Number(price);
        }

        const products = await productModel.find(filter);

        res.json({
          success: true,
          products,
        });

      } catch (error) {

        res.json({
          success: false,
          message: error.message,
        });

      }};


  const updateProduct = async(req,res) =>{
        try{
          const product = await productModel.findByIdAndUpdate
          (req.params.id,
           req.body,
           {new: true}
          );

          if(!product){
            return res.json({
              success: false,
              message: "product not found",
            });
          }

          res.json({
          success: true,
          message: "Product updated successfully",
          });

          } catch (error) {
            console.log(error); 
            
            res.json({
              success: false,
              message: error.message,
            });
          }
        };


  const deleteProduct = async(req,res) =>{
          try{
            const product = await productModel.findByIdAndDelete(req.params.id)

            if(!product){
              return res.json({
              success:false,
              message:"product not found"
            });
            }
              res.json({
                success:true,
                message: "product deleted successfully"
              });
            }

            catch (error) {
              console.log(error); 
              
              res.json({
                success: false,
                message: error.message,
              });
          }
        };


  const singleProduct = async(req,res) =>{
            try{
              const product = await productModel.findById(req.params.id)
              
              if(!product){
                res.json({
                  success: false,
                  message: "product not found"
                }); 
              }

              res.json({
                  success: true,
                  product
                });
            }

            catch (error){
              console.log(error)

              res.json({
                success: false,
                message: error.message
              });
            }
          }



export default {addProduct,getProduct, updateProduct, deleteProduct, singleProduct}