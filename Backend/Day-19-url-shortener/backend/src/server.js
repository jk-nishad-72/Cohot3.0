import {config  } from "./config/config.js";

import app  from "./app/app.js";



let PORT = config.PORT || 4000

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})