

const mongoose = require('mongoose')


const connecToDB = async () => {

     try {
        
         await mongoose.connect(process.env.MONOGODB_URI)

         console.log("Database is connected")

     } catch (error) {

        console.log('Database error' , error);
        
        
     }
    
}
module.exports = connecToDB