

import mongoose from "mongoose"
import config from "./config.js";

const connectTodb = async () => {
     
     try {
          
        await mongoose.connect(config.MONGODB_URI)
        console.log("Database is Connected");

     } catch (error) {

        console.log("Database error ",error);
        
     }
    
}
export default connectTodb