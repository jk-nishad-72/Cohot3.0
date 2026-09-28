import userModel from "../models/user.model.js";
import bcrypt from "bcryptjs"
import { generateTokens, readRefreshToken } from "../utils/auth.utils.js";


/**
 * @description Register an user and save the data from req.body
 * @param req express.Request
 * @param req.body Object
 * @param req.body.email String
 * @param req.body.name String
 * @param req.body.password String
 */
export const registerController = async (req , res) => {
    
     const {email , name , password} = req.body;

     const isExist = await userModel.findOne({email});

     if(isExist){
        return res.status(401).json({
            message:"User Already Exist",
            errors:[
                {
                    field:"Email",
                    message:"Already Exists"
                }
            ]
        })
     }

     const user = await userModel.create({
        email,
        name,
        passwordHash:await bcrypt.hash(password , 10)
     })

     const {accessToken , refreshToken} = generateTokens({userId:user._id , role:user.role})

     await userModel.findByIdAndUpdate(user._id  , {
        refreshToken
     })

     res.cookie(
        "refreshToken",
        refreshToken,
        {
            httpOnly:true,
        }
     );

     // response
     res.status(201).json({
        message:"User Register succesfully",
        data:{
            user:{
                name:user.name,
                email:user.email,
                id:user._id
            },
            accessToken:accessToken,
        }
     })
}


/**
 * description Login an user 
 * 
 * @param req express.Request
 * @param req.body Object
 * @param req.body.email String
 * @param req.body.password String
 *  
 */
export const loginController = async (req, res) => {

      const {email , password } = req.body;

      const isExist = await userModel.findOne({email})

      if(!isExist){
      return res.status(400).json({
          message:"Invalid Email or password"
      })
      }

      const isPasswordValid = await bcrypt.compare(password , isExist.passwordHash)

       if(!isPasswordValid){
      return res.status(400).json({
          message:"Invalid Email or password"
      })
      }

      const {
        accessToken:newAccesToken,
        refreshToken:newRefreshToken,
      } = generateTokens({userId:isExist._id , role:isExist.role})

      await userModel.findByIdAndUpdate(isExist._id , {
        refreshToken:newRefreshToken
      })

      res.cookie(
        "refreshToken",
        newRefreshToken,
        {
            httpOnly:true,
        }
      )

      res.status(200).json({
        message:"User login Succesfully",
        data:{
            user:{
                name:isExist.name,
                email:isExist.email,
                id:isExist._id,
            },
            accessToken:newAccesToken
        }
      })
    
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const getMeController = async (req,res) => {


     const {userId , role} = req.user;

     const user = await userModel.findById(userId)

     res.status(200).json({
        message:"user Data Fetch Succesfully",
        data:{
            user:{
                name:user.name,
                email:user.email,
                id:user._id,
            }
        }
     })
     
}


/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export const refreshController = async (req,res) => {

    const refreshToken  = req.cookies.refreshToken;

    if(!refreshToken){
        return res.status(401).json({
            message:"refresh token is required."
        })
    }

    try {

        const decode = readRefreshToken(refreshToken)

        const {userId , role}  = decode;

        const isExist = await userModel.findById(userId);

        if(!isExist){
            return res.status(401).json({
                message:"User Not Found"
            })
        }

    const {
        accessToken:newAccesToken,
        refreshToken:newRefreshToken,
      } = generateTokens({userId:isExist._id , role:isExist.role})

      await userModel.findByIdAndUpdate(isExist._id , {
        refreshToken:newRefreshToken
      })

      res.cookie(
        "refreshToken",
        newRefreshToken,
        {
            httpOnly:true,
        }
      )

      res.status(200).json({
        message:"User login Succesfully",
        data:{
            user:{
                name:isExist.name,
                email:isExist.email,
                id:isExist._id,
            },
            accessToken:newAccesToken
        }
      })
    
    } catch (error) {

        return res.status(401).json({
            message:"Invalid refresh Token"
        })
        
    }
    
} 
