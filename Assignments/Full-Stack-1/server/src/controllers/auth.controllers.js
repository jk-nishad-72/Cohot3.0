import userModel from "../models/user.models.js";
import bcrypt from "bcryptjs"
import { generatTokens, readRefreshToken } from "../utils/auth.utils.js";



/**
 * @description user register controller
 * @access public 
 * @param {*} req object 
 *  @param req.body.email | String | required
 *  @param req.body.name  | String | required
 *  @param req.body.password  | String | required 
 * @status 201 if created 
 * @status 409 if user already exists 
 * @returns json response 
 */

export const registerController = async (req, res) => {

     const {email , name , password}  = req.body;

     console.log(email, name, password );

     const isExist = await userModel.findOne({email});

    // if already exists 
     if(isExist){
        return res.status(409).json({
            message:"User already exists",
            errors:[
                {
                    field:"Email",
                    message:"Email already Exist's ."
                }
            ]
        })
     }

     // new User is created 
     const user = await userModel.create({
        name,
        email,
        passwordHash: await bcrypt.hash(password , 10)  
     })
    

     res.status(201).json({
        message:"User Registered Successfully.",
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
 * @description user login controller
 * @access public 
 * @param {*} req object 
 *  @param req.body.email | String | required
 *  @param req.body.password  | String | required 
 * @status 200 if user successfully logged in 
 * @status 401 if user not found or password incorrect 
 * @returns json response  with access token 
 */
export const loginController = async (req, res) => {

     const {email  , password}  = req.body;

     const user = await userModel.findOne({email});

    // if not found
     if(!user){
        return res.status(401).json({
            message:"Invalid Credentials",
        })
     }

     // if password incorrect 
     const isPasswordValid = await bcrypt.compare(password , user.passwordHash);

     if(!isPasswordValid){

         return res.status(401).json({
            message:"Invalid Credentials",
        })

     }


     // tokens generation 

     const {accessToken , refreshToken } = generatTokens({userId:user._id , role:user.role});

     // store refresh token on db 
     await userModel.findByIdAndUpdate(
        user._id,
        {
            refreshToken:refreshToken
        }
     )
      
     // user login successfully 

     res.cookie(
        "refreshToken",
        refreshToken,
        {
            httpOnly:true,
            secure:false,
            maxAge:7*24*60*60*1000,
        }
     ) 

     res.status(200).json({
        message:"User Logged Successfully.",
        data:{
            user:{
                name:user.name,
                email:user.email,
                id:user._id,
            },
            accessToken:accessToken,
        }
     })
}



/**
 * 
 */

export const refreshController = async (req , res) => {

      const refreshToken = req.cookies.refreshToken;

      if(!refreshToken){

        return res.status(401).json({
            message:"Invalid or Expire Refresh token"
        })
      }
    
       try {

          const decode = readRefreshToken(refreshToken)


          const user = await userModel.findById(decode.userId); 

          if(refreshToken != user.refreshToken){

            // User has logged out from other device ,  clear this device token 

            res.clearCookie(
                "refreshToken" ,
            {
                httpOnly:true,
                secure:false,
            }
            )

            await  userModel.findByIdAndUpdate(
                user._id , 
                {refreshToken:null}
            ) 


            return res.status(401).json({
                message:"Refresh token Mismatch",
            })
          } 

          const {accessToken:newAccess , refreshToken:newRefresh} = generatTokens({userId:user._id , role:user.role}) ;

          await userModel.findByIdAndUpdate(
            user._id,
            {
                refreshToken:newRefresh
            }
          )

          res.cookie(
            "refreshToken",
            newRefresh,
            {
                httpOnly:true,
                secure:true,
                maxAge:7*24*60*60*1000,
            }
          )

          res.status(200).json({
            message:"Access  Token Refreshed successfully.",
            data:{
                 user:{
                    name:user.name,
                    email:user.email,
                    id:user._id, 
                 },
                accessToken:newAccess,
            }
          })        
       } catch (error) {

        res.status(401).json({
            message:"Invalid or Expire Refresh token"
        })
         
       }
    
}



/**
 * 
 */

export const getMeController = async (req , res) => {

      const {userId , role} = req.user;

      const user = await userModel.findById(userId)
      
       res.status(200).json({
            message:"User data fetched successfully.",
            data:{
                 user:{
                    name:user.name,
                    email:user.email,
                    id:user._id, 
                 },
            }
          })       
     
        
    
}


export const logoutController = async (req, res) => {

      const {userId} = req.user;

      await userModel.findByIdAndUpdate(userId, {refreshToken:null}); 

      res.clearCookie(
        "refreshToken",
        {
            httpOnly:true,
            secure:false,
        }
      )

      res.status(200).json({
            message:"User Logged out successfully.",
      })    
    
}
