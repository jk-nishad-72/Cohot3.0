import app from  "./app/app.js"
import {config} from "./config/config.js";
import connetToDb from "./config/db.js";


await  connetToDb()


let PORT = config.PORT ||4000;


app.listen(PORT , ()=>{
    console.log(`Server is running on PORT ${PORT}`)
})