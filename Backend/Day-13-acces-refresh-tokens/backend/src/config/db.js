import mongoose from "mongoose";
import { config } from "./config.js";


const connectToDB = async () => {

     try {

        await mongoose.connect(config.MONGODB_URI)
        console.log("Database Connected Succesfully");
        
     } catch (error) {

        console.log("DB",error);
        
     }
    
}

export default connectToDB


