import authModel from "../models/user.model.js";
import { tokenGenerator } from "../utils/auth.utils.js";
import bcrypt from "bcryptjs"





export const registerController = async (req,res) => {
    

    const {email , name , password} = req.body;

    const isAlreadyExist = await authModel.findOne({
        email
    })
 
    if(isAlreadyExist){
        return res.status(400).json({
            message:"Already Exists Email ",
            errors:[
                {
                    field:"Email",
                    message:"Already exists email pleas provide valid email"
                }
            ]
        })
    }

    const user = await authModel.create({
        email,
        name,
        passwordHash:await bcrypt.hash(password , 10)
    })

    const {accessToken , refreshToken} = tokenGenerator({userId:user._id ,role:user.role })

     user.refreshToken = refreshToken;

     await user.save();

     res.status(201).json({
        message:"Register SuccesFully",
        data:[
            {
                name:user.name,
                email:user.name,
                id:user._id,
            }
        ]
     }) 
}