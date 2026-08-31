

const mongoose = require('mongoose')


const connectToDB = async () => {

    try {

         await mongoose.connect()
        
    } catch (error) {

        console.log("Databse error",error);
        
        
    }
    
}