
import app from './app/app.js';
import {config} from "./config/config.js";
import connectToDb from "./config/db.js";


await  connectToDb()

let PORT = config.PORT||  4000


app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));