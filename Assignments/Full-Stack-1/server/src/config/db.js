

import mongoose from "mongoose"
import config from "./config.js";


const connectToDB = async () => {

     try {

         await mongoose.connect(config.MONGODB_URI)
         console.log("DB is Connected Successfully.");
        
     } catch (error) {

        console.log(`Database error: `,error);
        
     }
    
}

export default connectToDB;
