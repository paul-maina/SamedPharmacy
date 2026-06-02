
import express from "express";
import dotenv from "dotenv";
import cors from"cors";
import mongoose from 'mongoose';
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/db.js"
import productRouter from "./routes/productRouter.js";

dotenv.config(); // Load .env file


const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(express.json());


connectDB ()
connectCloudinary ()

app.use("/api", productRouter);


app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});

