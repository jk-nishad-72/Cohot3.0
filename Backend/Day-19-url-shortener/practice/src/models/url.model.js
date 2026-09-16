
import mongoose  from "mongoose";

const urlSchema = new mongoose.Schema({
    originalURL:{
        type:String,
        required:true,
        maxLength:[2048 , "URL must be maximum 2048 characters"]

    },
    shortcode:{
        type:String,
        required:true,

    },
    clicks:{
        type:Number,
        default:0,
    }

})

const urlModel = mongoose.model('urlModel',urlSchema)

export default urlModel

