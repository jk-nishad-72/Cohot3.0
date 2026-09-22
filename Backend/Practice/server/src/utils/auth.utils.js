import config from "../config/config.js";
import jwt from "jsonwebtoken"




export const tokenGenerator = ({userId , role})=>{

     const accessToken = jwt.sign(
        {userId:userId, role},
        config.ACCESS_TOKEN_SECRETE ,
        {expiresIn:"15min"}
    )

    const refreshToken = jwt.sign(
        {userId:userId, role},
        config.REFRESH_TOKEN_SECRETE ,
        {expiresIn:"7d"}
    )
  return   {accessToken , refreshToken}
}

export const readRefreshToken = (refreshToken)=>{
    return jwt.verify(refreshToken , config.REFRESH_TOKEN_SECRETE)
}


export const readAccesToken = (accessToken)=>{
    return jwt.verify(accessToken , config.ACCESS_TOKEN_SECRETE)
}

