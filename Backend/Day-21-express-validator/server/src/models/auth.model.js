

import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
       
    },
},{timestamps:true})

const userModel = mongoose.model("userModel",authSchema)

export default userModel