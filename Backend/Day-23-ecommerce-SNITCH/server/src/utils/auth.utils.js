import jwt from "jsonwebtoken"
import config from "../config/config.js"



export const generateToken = ({userId , role})=>{

    const accessToken =  jwt.sign({id:userId, role} ,config.ACCESS_TOKEN_SECRETE)

    const refreshToken = jwt.sign({id:userId} , config.REFRESH_TOKEN_SECRETE)

    return {accessToken , refreshToken}


}

export const readRefreshToken = (refreshToken)=>{

    return jwt.verify(refreshToken , config.REFRESH_TOKEN_SECRETE)
}


export const readAccessToken = (accessToken)=>{
    return jwt.verify(accessToken , config.ACCESS_TOKEN_SECRETE)
    
}