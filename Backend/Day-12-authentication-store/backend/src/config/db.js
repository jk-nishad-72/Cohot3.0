import mongoose from "mongoose";

import dotenv from "dotenv";
dotenv.config()

 const connectToDB = async () => {

     try {

         
       
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Database connected");        
     } catch (error) {
        console.log('db',error);
        
     }
   
}
export default connectToDB