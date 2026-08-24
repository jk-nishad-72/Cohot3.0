


const mongoose = require('mongoose')


const connectToDb = async ()=>{

     try {
        
         await mongoose.connect( "mongodb+srv://kishanNishad:XpGknOtaUvQAT8Al@cluster0.zqegeov.mongodb.net/" )

         console.log('Database connected ');

         

     } catch (error) {
        console.log('Data Base error',error );
     }

}

module.exports = connectToDb