import  dotenv from "dotenv"

dotenv.config()

export  const config = {

    PORT:process.env.PORT,
    MONGODB_URI:process.env. MONGODB_URI,
    JWT_SECRETE_KEY:process.env.JWT_SECRETE_KEY,
}