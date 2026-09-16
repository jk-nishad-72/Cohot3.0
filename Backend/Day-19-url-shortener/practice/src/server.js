

import app from "../src/app/app.js"
import connectTodb from "./config/db.js";



let PORT = 3000; 

await connectTodb();


app.listen(PORT ,()=>{
    console.log(`Server is running on PORT ${PORT}`);

})