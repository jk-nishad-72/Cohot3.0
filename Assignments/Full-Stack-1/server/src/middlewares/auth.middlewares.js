import { readAccessToken } from "../utils/auth.utils.js";


export const authenticate =  (req, res , next) => {


   
    const accessToken = req.headers.authorization.split(" ")[1];

    if(!accessToken){
        return res.status(401).json({
            message:"Unauthorized. token is not available."
        });
    } 

     try {
         // veryfy accesstoken 
        const decode = readAccessToken(accessToken); 
        req.user = decode;
        next()
        
     } catch (error) {

        res.status(401).json({
            message:"Invalid  or Expire Access token"
        })
     }
    
}