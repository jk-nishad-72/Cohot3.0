import jwt from "jsonwebtoken"
import config from "../config/config.js"



export const tokenGenerator = ({userId, role})=>{

     const accessToken = jwt.sign(
        {id:userId, role} , 
        config.ACCESS_TOKEN_SECRETE,
        {expiresIn:"15min"}
    )

     const refreshToken = jwt.sign(
        {id:userId, role} ,
         config.REFRESH_TOKEN_SECRETE,
         {expiresIn:"7d"}
        );


        return {accessToken , refreshToken}

}