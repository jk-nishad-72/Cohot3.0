

import { connect } from "mongoose";
import configObj from "./config.js";


async function connectToDb() {

     try {

        await connect(configObj.MONGODB_URI)

        console.log("DB connected") 
        
     } catch (error) {

        console.log('DB',error)
        
     }
    
}

export default  connectToDb