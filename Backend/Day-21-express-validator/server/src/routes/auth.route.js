

import express from "express"
import registerValidator from "../validators/auth.validator.js";
import userModel from "../models/auth.model.js";
import bcrypt from "bcryptjs"

const router = express.Router();

/**
 * @PORT /api/auth/register 
 */

router.post("/register", registerValidator ,async (req,res) => {
      
              console.log(req.body);
              
              const {email , phone , password} = req.body; 

              const newUser = await userModel.create({
                email,
                phone,
                password:await bcrypt.hash(password,10)
                
              })
              
              res.status(201).json({
                message:"User Register Succesfully",
                data:[
                    {
                        email:newUser.email,
                        phone:newUser.phone,
                        id:newUser._id,
                        
                    }
                ]
            })
    
})


export default router

