import {Schema  , model  } from "mongoose";

const urlSchema = new Schema({
    originalURL:{
        type:String,
        required:true,
        maxLength:[2048 ,"URL is too long"],

    },
   shortcode: {

    type:String,
    require:true,

    },
    clicks:{
        type:Number,
        
    },
},{timestamps:true})

const urlModel = model('urlModel',urlSchema)

export default urlModel;