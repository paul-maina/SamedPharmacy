import userModel from "../models/userModel.js";


const addUser = async(req,res) =>{
    try{
        const{name,email} = req.body

        if (!name || !email) {
            return res.json({
                success: false,
                message: "Name and email are required"
            });
        }

        const existingUser = await userModel.findOne({ email });
    
      if (existingUser) {
            return res.json({
                success: false,
                message: "User already exists"
            });
        }

        const user = await userModel.create({
            name,
            email
        });

        return res.json({
            success: true,
            message: "User created successfully",
            user
        });

    } 
    catch (error) {
        console.log(error);

        return res.json({
            success: false,
            message: error.message,
        });
    }};

const getUser = async(req,res) =>{
    try{
        const{name,email} = req.query;
        let filter = {};

        if (name) {
          filter.name = { $regex: name, $options: "i" };
        };

        if (email) {
          filter.email = { $regex: email, $options: "i" };
        };

        const user = await userModel.find(filter)

        if(user.length === 0){
            return res.json({
                success: false,
                message: "user not found"
            })
        };

        res.json({
            success: true,
            user,
        });
    }
       catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: error.message,
        });
        
       }};

const updateUser = async(req,res) =>{
    try{
        const {id} = req.params
        const updateData = req.body

        const user = await userModel.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if(!user){
            return res.json({
                success: false,
                message: "user not found",
            })
        }
        res.json({
            success: true,
            message: "user updated successfully",
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

const deleteUser = async(req,res) => {
    try{
        const {id} = req.params

        const user = await userModel.findByIdAndDelete(id)

        if(!user){
            return res.json({
                success: false,
                message: "user not found"
            })
        }
        res.json({
            success: true,
            message: "user deleted successfully"
        });
    }
       catch (error) {
        console.log(error);

        res.json({
            success: false,
            message: error.message,
        });
        
       }
}
const singleUser = async(req,res) =>{
    try{
        const {id} = req.params

        const user = await userModel.findById(id)

        if(!user){
            return res.json({
                success: false,
                message: "user not found"
            })
        }
        res.json({
            success: true,
            user,
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


export {addUser,getUser,updateUser,deleteUser,singleUser}
