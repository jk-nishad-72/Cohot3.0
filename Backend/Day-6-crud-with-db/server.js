
const app = require('./src/app.js')
require('dotenv').config() 
const connectToDb = require('./config/db.js')


let PORT = 3000 

connectToDb()


app.get('/',(req, res)=>{

    res.send(`Welcome to notes Backend`);
    
})


app.listen(PORT, ()=>{

    console.log(`Server is running on PORT ${PORT}`);

})


