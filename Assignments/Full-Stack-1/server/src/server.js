import app from "./app/app.js";
import connectToDB from "./config/db.js";



let PORT = 3000;


/**
 *  ---DB CONNECTION ---
 */

await connectToDB();

/**
 *  --- EXPRESS APP LISTENING PORT --- 
 */
app.listen(PORT , ()=>{
    console.log(`Server is Running on PORT ${PORT}`);

})