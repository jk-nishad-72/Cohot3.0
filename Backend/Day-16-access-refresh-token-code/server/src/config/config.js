

import { config } from "dotenv";

config();

  const configObj = {
    PORT:process.env.PORT,
    MONGODB_URI:process.env.MONGODB_URI,
    REFRESH_JWT_SECRETE_KEY: process.env.REFRESH_JWT_SECRETE_KEY,
    ACCESS_JWT_SECRETE_KEY: process.env.ACCESS_JWT_SECRETE_KEY,
    
}

export default configObj; 