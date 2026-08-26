

const mongoose = require('mongoose')


const connectToDB = async () => {

     try {

         await mongoose.connect(process.env.MONOGDB_URL)

         console.log("Database connected succesFully ")

        
     } catch (error) {

        console.log('Database error',error);
        
        
     }
    
}
module.exports = connectToDB