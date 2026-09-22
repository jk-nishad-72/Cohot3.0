import authModel from "../models/user.model.js";
import { generateToken, readRefreshToken } from "../utils/auth.utils.js";
import bcrypt from "bcryptjs"



/**
 * 
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */ 

export const registerController = async (req, res) => {

     const {email , name , password} = req.body;

     const isAlreadyExist = await authModel.findOne({
        email,
     })

     if(isAlreadyExist){
        return res.status(400).json({
            message:"Email Already exist",
            error:[
                {
                    field:"email",
                    message:"Email Already exist"
                }
            ]
        })
     }

     const user = await authModel.create({
        email,
        name,
        passwordHash:await bcrypt.hash(password , 10)

     })

     const {accessToken ,  refreshToken}  = generateToken({userId:user._id ,role:user.role})

     await authModel.findByIdAndUpdate(user._id , {
        // refreshToken:refreshToken
        // or
        refreshToken
     })

     res.cookie("refreshToken",refreshToken,{
        httpOnly:true
     })

     res.status(201).json({
        message:"User Register Succsefull",
        data:{
            user:{
                email:user.email,
                name:user.name,
                id:user._id,
                role:user.role
            },
            accessToken
        } 
     })    
}

export const loginController = async (req, res) => {

        const {email , password} = req.body;

        const isExists = await authModel.findOne({
            email
        })

        if
    
    
}


/**
 *  refresh
 * @param {*} req 
 * @param {*} res 
 * @returns  
 */

export const refreshTokenController = async (req, res) => {

    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken){
        return res.status(401).json({
            message:"Refresh Token not found"
        })
    }

    try {

        const decode = readRefreshToken(refreshToken);

         const {id , role} = decode

        const user = await authModel.findById(id)

         if(refreshToken != user.refreshToken){

        await authModel.findByIdAndUpdate(
                id , 
                {refreshToken:null}
            )
            return res.status(401).json({
                message:"Refresh token mismatch"
            })
         }

        const {accessToken:newAccesToken , refreshToken:newRefreshToken} = generateToken( { userId :id , role})

        res.cookie("refreshToken",refreshToken,{httpOnly:true})

        await authModel.findByIdAndUpdate(id,{
            refreshToken:newRefreshToken
        }) 


        res.status(200).json({
             message:"Tokens rotated Successfully",
             data:{
                user:{
                    email:user.email,
                    name:user.name,
                    id:user._id

                },
                accessToken:newAccesToken
             }
        })
       
        
    } catch (error) {
        return res.status(401).json({
            message:"Invalid refresh token"
        })
        
    }


    
}

/**
 *  get me 
 */

export const getMeController = async (req, res) => {

     const {id , role} = req.user;

     const user = await authModel.findById(id)

     if(!user){
        return res.status(404).json({
            message:"User not found",
        })
     }

     res.status(200).json({
        message:"User Data fetch Successfully",
        data:{
            user:{
                name:user.name,
                email:user.email,
                role:user.role,
                id:user._id,
            },
            
        }
     })
    
}