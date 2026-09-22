
import jwt from "jsonwebtoken"
import config from "../config/config.js"



const generateToken = ({userId, role})=>{

    const accessToken = jwt.sign({id:userId , role} , config.ACCESS_TOKEN_SECRETE ,{expiresIn:"15Min"})
    const refreshToken = jwt.sign({id:userId , role} , config.REFRESH_TOKEN_SECRETE,{expiresIn:"7Days"}) 

    return {accessToken , refreshToken}
}

export default generateToken;