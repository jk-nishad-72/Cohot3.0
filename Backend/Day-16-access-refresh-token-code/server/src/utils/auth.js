
import jwt from "jsonwebtoken"
import configObj from "../config/config.js"


export const tokenGenerator = ({userId})=>{

    const accessToken = jwt.sign(
        {id:userId},
        configObj.ACCESS_JWT_SECRETE_KEY,{
            expiresIn:"15m",
        }
    )
    const refreshToken = jwt.sign(
        {id:userId},
        configObj.REFRESH_JWT_SECRETE_KEY,
        {
            expiresIn:"7d"
        }
    )

    return {accessToken , refreshToken}
}

export const verifyAccesToken = (accessToken)=>{

     const decode = jwt.verify(accessToken, configObj.ACCESS_JWT_SECRETE_KEY)
     return decode

}

export const verifyRefreshToken = (refreshToken)=>{

     const decode = jwt.verify(refreshToken, configObj.REFRESH_JWT_SECRETE_KEY)

     return decode

}