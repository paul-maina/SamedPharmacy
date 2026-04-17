// backend/index.js
const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const mongoose = require('mongoose')

dotenv.config(); // Load .env file


const app = express();

app.use(cors());
app.use(express.json());



const schemaData = mongoose.Schema({
  name : String,
  email : String,
  password: String,
},{
  timestamps: true
});

const userModel = mongoose.model("user",schemaData)

app.get("/", async(req, res) => {
  const data = await userModel.find({})
  res.json({success : true, data : data});
});


app.post("/create", async(req,res)=>{
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

// Start server
const PORT = process.env.PORT || 8080;

