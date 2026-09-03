
import dotenv from "dotenv";

dotenv.config();

export const config = {

     PORT:process.env.PORT,
     MONGODB_URI:process.env.MONGODB_URI,
     ACCESS_JWT_SECRETE:process.env.ACCESS_JWT_SECRETE,
     REFRESH_JWT_SECRETE:process.env.REFRESH_JWT_SECRETE, 
}