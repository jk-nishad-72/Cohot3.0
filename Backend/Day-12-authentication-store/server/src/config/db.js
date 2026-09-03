

const mongoose = require('mongoose')
require('dotenv').config();

const connectToDB = async () => {

     try {
        
        await mongoose.connect(process.env.MONGODB_URI)

        console.log("database connected ")

     } catch (error) {

        console.log('db error',error);
        
        
     }
    
}

module.exports = connectToDB