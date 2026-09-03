import authModel from "../models/auth.model.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { config } from "../config/config.js";


// register api | end Point 
export const registerController  = async (req , res) => {

     try {

         const { name , email , password } = req.body;

         const user = await authModel.create({
            name,
            email,
            password:await  bcrypt.hash(password , 10)
         })

         let token = jwt.sign({id:user._id} , config.ACCESS_JWT_SECRETE)

         res.status(201).json({
            Message:"user Created ",
            data:{
                user:user,
                Acces_Token:token
            },
         })
        
     } catch (error) {

        res.status(500).json({
            message:"Server error"
        })
        
     }
    
}

export const authMeController = async (req ,res) => {

     let user = req.user

     res.status(200).json({

        message:"User Authenticated",
        data:{
            user:user
        }
     })
    
}