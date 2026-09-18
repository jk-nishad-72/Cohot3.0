import bcrypt from "bcryptjs";
import authModel from "../models/auth.model.js";



// register controller 

export const registerController =  async (req,res) => {
     
       const {email , phone , password } = req.body;

       const existsUser = await authModel.findOne({
        email:email
       })
       if(existsUser){
        return res.status(400).json({
            message:"Already exists.."
        })
       }

       const newUser = await authModel.create({
        email,
        phone,
        password:await bcrypt.hash(password , 10)
       })

       res.status(201).json({
        message:"user registerd ",
        data:[
            {
                email:newUser.email,
                phone:newUser.phone,
                id:newUser._id,
            }
        ]
       })

    
}