
import {sign , verify } from "jsonwebtoken"
import configObj from "../config/config"

export const tokenGenerator = ({userId})=>{

    const accessToken = sign(
        {id:userId},
        configObj.ACCESS_JWT_SECRETE_KEY,{
            expiresIn:"15m",
        }
    )
    const refreshToken = sign(
        {id:userId},
        configObj.REFRESH_JWT_SECRETE_KEY,
        {
            expiresIn:"7d"
        }
    )

    return {accessToken , refreshToken}
}

export const verifyAccesToken = (accessToken)=>{

     const decode = verify(accessToken, configObj.ACCESS_JWT_SECRETE_KEY)
     return decode

}

export const verifyRefreshToken = (refreshToken)=>{

     const decode = verify(refreshToken, configObj.REFRESH_JWT_SECRETE_KEY)
     return decode

}