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
      role:{
        type:String,
        default:"user",
        enum:["user","seller"]
    },

})

const authModel = mongoose.model("user",authSchema)

export default authModel;