
import app from "./app/app.js";
import connectToDb from "./config/db.js";


/**
 * DB connection 
 */
await connectToDb()


app.listen(3000,()=>{
    console.log(`Server is running on PORT ${3000}`);
})