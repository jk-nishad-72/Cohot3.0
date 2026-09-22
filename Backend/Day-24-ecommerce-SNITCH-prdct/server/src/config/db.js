

import mongoose from "mongoose"
import config from "../config/config.js"



const connectToDb = async () => {

     await mongoose.connect(config.MONGODB_URI)
     console.log("DB is Connected");

    
} 
export default connectToDb;