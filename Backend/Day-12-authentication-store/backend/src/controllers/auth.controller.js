
import dotenv from "dotenv";
import authModel from "../models/auth.model.js";
import jwt from "jsonwebtoken"
import bcrypt from "bcryptjs";

dotenv.config();


export const registerController =  async (req,res)=>{ 

      let {name , email , password} = req.body;

       let user = await authModel.create({
        name,
        email,
        password: await bcrypt.hash(password , 10) 
       })

       let token = jwt.sign({id:user._id} , process.env.JWT_SECRETE_KEY)

      res.status(201).json({
       message:"User created Succesfully",
       data:{
        user:{
            name:name,
            email:email,
            id:user._id
        },
        token
       }

      })
} 

export const authMeController  = async (req,res)=>{

    
    let user = req.user

    res.status(200).json({
     message:"User Find Succesfully",
     data:{
      user:user
     }
    })
}

export const loginController =  async (req,res)=>{

    
    let {email , password  } =  req.body;

      
    console.log(email , password);
    
    let user  = await authModel.findOne({
        email
    }) 

    const isValidPassword = await bcrypt.compare(password , user.password)

    if(!isValidPassword){

        return res.status(401).json({
            message:"Invalid Credentials"
        })
    }

    let token = jwt.sign({id:user._id} , process.env.JWT_SECRETE_KEY)

      res.status(200).json({
       message:"Login succesfully",
       data:{
        user:{
            name:user.name,
            email:user.email,
            id:user._id
        },
        token
       }

      })
}
