
import app from "./app/app.js";
import config from "./config/config.js";
import connectToDb from "./config/db.js";

let PORT  = config.PORT || 4000;


await connectToDb();

app.listen(PORT , ()=>{
    console.log(`Server is running on PORT ${PORT}`)

})