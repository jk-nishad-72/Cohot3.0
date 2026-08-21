const { default: mongoose } = require("mongoose")


const connectToDB = ()=>{

        mongoose.connect(process.env.MONGO_DB_URI)
        .then(()=>{
            console.log('database connected')
        })
        .catch(()=>{
            console.log('database error')
        })
        
       

}

module.exports = connectToDB