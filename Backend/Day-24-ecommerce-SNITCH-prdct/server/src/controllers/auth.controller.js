import { userModel } from "../models/user.model.js";
import bcrypt from "bcryptjs"
import { 
    tokenGenerator , 
    readAccesToken , 
    readRefrshToken 
} from "../utils/auth.utils.js";





/**
 * @description Register an user and save the data from req.body
* @param req express.Request
* @param req.body Object
* @param req.body.email String
* @param req.body.name String
* @param req.body.password String
 */
export const registerController = async (req,res) => {

      const {email , name , password} = req.body;


      const isExists = await userModel.findOne({email})


       if(isExists){
        return res.status(400).json({
            message:"Email Already Exist",
            errors:[
                {
                    field:"Email",
                    message:"Already Exist email"
                }
            ]
        })
       }

       const user = await userModel.create({
        email,
        name,
        passwordHash: bcrypt.hashSync(password , 10)

       })

       const {accessToken , refreshToken } = tokenGenerator({userId:user._id , role:user.role})

        
       await userModel.findByIdAndUpdate(user._id,{
        refreshToken:refreshToken
       }) 

       res.cookie( 
        "refreshToken",
         refreshToken,
        {httpOnly:true}
       )

      res.status(201).json({
        message:"User Registered",
        data:{
            user:{
                name:user.name,
                email:user.email,
                role:user.role,
                id:user._id
            },
            accessToken
        }
      })
    
}


/**
 * @description Login a user and create new set of accessToken and refreshToken 
* @param req.body.email String
* @param req.body.password String
 */
export const loginController = async (req,res) => {
    
    const {email , password } = req.body;


    const user = await userModel.findOne({email})

    if(!user){
        return res.status(404).json({
            message:"Invalid email or password"
        })
    }

    
}

export const refreshController  = async (req,res) => {
    
}

export const getMeController  = async (req,res) => {

    
}