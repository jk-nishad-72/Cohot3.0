

import mongoose  from "mongoose";
import { config } from "./config.js";


const connectTodb = async () => {

     await mongoose.connect(config.MONGODB_URI) 
     console.log("database is connected");
     
    
}

export default connectTodb;