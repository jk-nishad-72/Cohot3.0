import dotenv from "dotenv"
dotenv.config();


const config = {
    
    MONGODB_URI:process.env.MONGODB_URI,
    ACCESS_TOKEN_SECRETE:process.env.ACCESS_TOKEN_SECRETE,
    REFRESH_TOKEN_SECRETE:process.env.REFRESH_TOKEN_SECRETE,
    
}
export default config;