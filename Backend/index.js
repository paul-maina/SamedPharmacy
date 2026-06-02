
import express from "express";
import dotenv from "dotenv";
import cors from"cors";
import mongoose from 'mongoose';
import connectCloudinary from "./config/cloudinary.js";
import connectDB from "./config/db.js"

dotenv.config(); // Load .env file


const app = express();

app.use(cors());
app.use(express.json());


connectDB ()
connectCloudinary ()

app.use('/api/')



app.get("/", async(req, res) => {
  const data = await userModel.find({})
  res.json({success : true, data : data});
});


app.post("/", async(req,res)=>{
  console.log(req.body)
  const data = new userModel(req.body)
  await data.save()
  res.send({success : true, message :"data saved suucessfully", data : data} )
})


app.put("/update", async(req,res)=>{
  console.log(req,body)
  const {id,...rest} = req.body

  console.log(rest)
  const data = await userModel.updateOne({_id : id}, rest)
  res.send({success : true, message :"data updated suucessfully", data : data })
})


app.delete("/delete/:id", async(req,res)=>{
  const id = req.params.id
  console.log(id)
  const data = await userModel.deleteOne({_id : id})
  res.send({success : true, message :"data deleted suucessfully", data : data} )
})


mongoose.connect(process.env.MONGO_URI)
 .then(()=>{
          console.log("Connected to Mongodb")
          app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))
        })
 .catch(err =>console.error("Connection error:",err))


const PORT = process.env.PORT || 8080;

