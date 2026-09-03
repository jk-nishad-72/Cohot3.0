
import app  from "./app/app.js";
import { config } from "./config/config.js";
import connectToDB from "./config/db.js";


let PORT = config.PORT || 4000

await connectToDB()

app.listen(PORT , ()=>{

    console.log(`Server is running on PORT ${PORT}`);
})
