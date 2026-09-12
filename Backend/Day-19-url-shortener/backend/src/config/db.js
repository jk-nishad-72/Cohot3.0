
import mongoose from "mongoose";
import { config } from "./config.js";

export  async function connectToDB() {

     await mongoose.connect(config.MONGODB_URI)
     console.log("Database Connected");

    
}