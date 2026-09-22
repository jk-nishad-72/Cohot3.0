
import {userModel} from "../models/user.model.js";
import bcrypt from "bcryptjs";
import { tokenGenerator } from "../utils/auth.utils.js";




/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

export const registerController =  async (req, res) => {
            
      const {email , name , password} = req.body;

      const isAlreadyExists = await userModel.findOne({email})

      if(isAlreadyExists){
        return res.status(400).json({
            message:"Email already exist",
            error: [
                {
                field:"Email",
                message:"Email already exist"
             }
            ]
        })
      }
      const user = await userModel.create({
        email,
        name,
        passwordHas:await bcrypt.hash(password , 10)

      })


      const {accessToken , refreshToken} = tokenGenerator({userId:user._id,role:user.role})

      res.cookie("refreshToken",refreshToken  , {
        httpOnly:true,
      })

      await userModel.findByIdAndUpdate(user._id , {
        refreshToken
      })

      res.status(201).json({
        message:"User Register succesfull",
        data:{
            user:{
                name:user.name,
                email:user.email,
                id:user._id,
            },
            accessToken
        }
      })
}



