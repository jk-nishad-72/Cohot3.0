import app from "./app/app.js";
import { config } from "./config/config.js";


let PORT = config.PORT ||  3000;




app.listen(5000 , ()=>{

    console.log(`Server is running on port ${5000}`);

})

