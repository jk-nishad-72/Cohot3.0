import { readAccesToken } from "../utils/auth.utils.js";


export const  authenticate = async (req , res , next) => {

        const accessToken  = res.headers.authorization.split(" ")[1];

        if(!accessToken){

            return res.status(400).json({
                message:"Access token not found in the request header"
            })
        }

        try {
            
            const decode =  readAccesToken(accessToken)
            req.user = decode
            next();
        } catch (error) {

            return res.status(401).json({
                message:"Invalid or expire access token"
            })
            
        }
    
}