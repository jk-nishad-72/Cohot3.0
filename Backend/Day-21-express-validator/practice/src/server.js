import app from "./app/app.js";
import config from "./config/config.js";



let port =  5000;


app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})