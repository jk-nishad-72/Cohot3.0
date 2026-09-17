

import app from "./app/app.js";
import config from "./config/config.js";
import connectTodb from "./config/db.js";



let PORT = config.PORT || 5000;

await connectTodb()

app.listen(3000 , ()=>{
    console.log(`Server is runing on PORT ${3000}`);
})