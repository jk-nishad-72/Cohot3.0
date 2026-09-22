
import mongoose from "mongoose";

const authSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
     email:{
        type:String,
        required:true,
        unique:true,
    },
     passwordHash:{
        type:String,
        required:true,
        unique:true,
    },
},{timestamps:true})


const authModel = mongoose.model("user",authSchema)

export default authModel