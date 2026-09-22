
import jwt from "jsonwebtoken"
import config from "../config/config.js"


export const  tokenGenerator = ({userId , role})=>{

     const accessToken = jwt.sign(
        {userId , role} , 
        config.ACCESS_TOKEN_SECRETE ,
        {expiresIn:"15min"}
    )

     const refreshToken = jwt.sign(
        {userId , role} , 
        config.REFRESH_TOKEN_SECRETE,
        {expiresIn:"7d"}

    )

     return {accessToken , refreshToken }
}


export const readAccesToken =  function(accessToken) {

     return jwt.verify(accessToken, config.ACCESS_TOKEN_SECRETE)
    
}


export const readRefrshToken =  function(refreshToken) {

     return jwt.verify(refreshToken, config.REFRESH_TOKEN_SECRETE)
    
}

