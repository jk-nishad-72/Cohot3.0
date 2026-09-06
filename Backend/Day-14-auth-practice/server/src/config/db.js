

import mongoose from "mongoose";
import {config} from "./config.js";


const connectToDb = async  ()=>{

    try{

        await  mongoose.connect(config.MONGODB_URI);
        console.log('Database is connected ')
        

    }catch (error){

        console.log("Database ", error)

    }
}

export  default  connectToDb
