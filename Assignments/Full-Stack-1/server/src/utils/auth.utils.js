import jwt from "jsonwebtoken"
import config from "../config/config.js";


export const generatTokens = ({userId , role})=>{

     const accessToken = jwt.sign( 
        {
            userId,
            role
        },
        config.ACCESS_TOKEN_SECRET,

        {expiresIn:"15min"}
     )

      const refreshToken = jwt.sign( 
        {
            userId,
            role
        },

        config.REFRESH_TOKEN_SECRET,
        {expiresIn:"7d"}
     )

     return {accessToken , refreshToken};
}

export const readAccessToken = (accessToken)=>{
    return jwt.verify(accessToken , config.ACCESS_TOKEN_SECRET)
}

export const readRefreshToken = (refreshToken)=>{
    return jwt.verify(refreshToken , config.REFRESH_TOKEN_SECRET) 
}