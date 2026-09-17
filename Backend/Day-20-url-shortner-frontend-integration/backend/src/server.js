import app from "./app/aap.js";
import { config } from "./config/config.js";



let PORT = config.PORT || 4000
app.listen(PORT , ()=>{
    console.log(`Server is running on PORT ${PORT}`);
    
})


