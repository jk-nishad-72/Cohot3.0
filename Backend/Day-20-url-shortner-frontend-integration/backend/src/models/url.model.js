
import mongoose from "mongoose";


const urlSchema = new mongoose.Schema({

     originURL:{
        type:String,
        required:true,
        maxLength:[2048, "Max length is 2048 characters"],
        trim:true,
     },
     shortcode:{
        type:String,
        required:true,
     },
     clicks:{
        type:Number,
        default:0,
     },
})

const urlModel = mongoose.model("urlModel",urlSchema)

export default urlModel;