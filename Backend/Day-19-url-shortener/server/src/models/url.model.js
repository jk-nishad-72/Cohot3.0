

import mongoose from "mongoose";


const urlSchema = new mongoose.Schema({
     
     originalURL:{
        type:String,
        required:true,
        maxLength:2048,
        trim:true,
     },
     shortcode:{
        type:String,
        required:true,
     },
     clicks:{
        type:Number,
        default:0,
     }
},{timestamps:true})

const urlModel = mongoose.model('urlModel',urlSchema)

export default urlModel;