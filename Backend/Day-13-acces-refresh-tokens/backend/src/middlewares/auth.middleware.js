import jwt from "jsonwebtoken";
import { config } from "../config/config.js";
import authModel from "../models/auth.model.js";


export const authenticate = async (req , res,next) => {

     let token = req.headers.autherization

     if(!token){
        return res.status(401).json({
            message:"Invalid token"
        })
     }

     let {id}  = jwt.verify(token, config.ACCESS_JWT_SECRETE)

    
     
     let user = await authModel.findById(id) 

     console.log(user);
     
     req.user = user

     next()
}