import mongoose from "mongoose";
import {config} from "./config.js";


const connetToDb = async () => {

     try{

         await  mongoose.connect(config.MONGODB_URI)
         console.log("Database Connected Succesfully")
     }catch (e) {
         console.log("DB",e)
     }
}

export  default  connetToDb