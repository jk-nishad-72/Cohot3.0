

import app from "./src/app/app.js";

import dotenv from "dotenv";
import  connectToDB  from "./src/config/db.js";
dotenv.config()



// first database connect than go for start server 
await connectToDB()

let PORT = process.env.PORT ||  4000 

app.listen(PORT,()=>{

    console.log(`Server is running on port ${PORT}`);
})
