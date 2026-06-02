
import express from "express"

import {addProduct,getProduct, updateProduct, deleteProduct, singleProduct} from "../controllers/productControllers.js";

const router = express.Router();


router.post("/products", addProduct);
router.get("/products", getProduct);

router.get("/products/:id", singleProduct);

router.put("/products/:id", updateProduct);

router.delete("/products/:id", deleteProduct);



export default router;
 

