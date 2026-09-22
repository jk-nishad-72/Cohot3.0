import { readAccessToken } from "../utils/auth.utils";


export const authenticateMiddleware = (req, res, next)=>{
    const accessToken = req.headers.Autherization?.split(" ")[1];
    if(!accessToken){
        return res.status(400).json({
            message:'Access token not found in the request headers',
        })
    }
    try {
        const decode = readAccessToken(accessToken);
        const {id , role} = decode;
        req.user = {id , role}
        next();
        
    } catch (error) {

         res.status(401).json({
            message:"Invalid or expire access token"
         })
        
    }
         
}