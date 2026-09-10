import authModel from "../models/auth.model.js";
import bcrypt from "bcryptjs"
import {tokenGenerator, verifyRefreshToken} from "../utils/auth.js";



export const registerController = async (req, res) => {

     try {
        const {name , email , password } =  req.body;

         if(!name || !email || !password){
             return res.status(400).json({
                 message:"Please fill all the fields",
                 errror:[
                     {
                         path:"name , email , password" ,
                         message:"Please fill all the fields"
                     }

                 ]
             })
         }

         let isAlreadyExist = await  authModel.findOne({email})

         if(isAlreadyExist){
             return  res.status(400).json({
                 message:"User already exist",
                 error:[
                     {
                         path:"email",
                         message:"User already exist"
                     }
                 ]
             })
         }

         let newUser = await  authModel.create({
             name,
             email,
             // no need to write await here
             password: bcrypt.hashSync(password , 12)
         })

         const {accessToken , refreshToken} = tokenGenerator({userId:newUser._id});

          // now store refreshToken in database
         newUser.refreshToken = refreshToken;
         await newUser.save();

         res.cookie("refreshToken",refreshToken,{
             httpOnly:true
         })

         return res.status(201).json({
             message:"User Registration Successfull",
             data:[
                 {
                     name:newUser.name,
                     email:newUser.email
                 },
                { accessToken:accessToken},
             ]
         })

     } catch (error) {
        
        res.status(500).json({
            message:"internal  server Registeration error",
            error:
            [
                {
                    path:"Registeration",
                    message:error.message,
                }
            ]

        })
     }
    
}


export const authMeController =  async (req,res)=>{

    let  accessToken = req.headers.autherization?.split(" ")[1];
 

     if(!accessToken){

        return res.status(401).json({
            message:"Unautherization, token not found",
        })
     }

     try {

        let decode = verifyAccesToken(accessToken);

        let user = await authModel.findById(decode.id)


        res.status(200).json({
            message:"User Profile",
            data:[
                {
                    user:user.name,
                    email:user.email,
                    _id:user._id
                }
            ]
        })
        
     } catch (error) {

        res.status(401).json({
            massage:"Invalid token",
            error:[
                {
                    path:"token",
                    message:"Invalid token"
                }
            ]
        })
        
     }

}

export const refreshController = async (req,res)=>{

       let refreshToken = req.cookies.refreshToken;

       if(!refreshToken){

         return res.status(401).json({
            message:"Unautherized, Refresh token not found",
            error:[
                    {
                        path:"Refresh Token",
                        message:"Refresh token not found"
                    }
            ]
         })
       }

       try { 

        let decode = verifyRefreshToken(refreshToken);

        let user = await authModel.findById(decode.id)

        if(refreshToken !== user.refreshToken){

            user.refreshToken = null;
            await user.save();

            return res.status(401).json({
                message:"Ivalid Token",
                error:[
                    {
                        path:"Refresh Token",
                        message:"Refresh Token is not match",
                    }
                ]
            })
        }
  

        // is renaming :newAccessToken , :newRefreshToken 
        
        let {accessToken :newAccessToken ,refreshToken:newRefreshToken }  = tokenGenerator({userId:user._id})

        user.refreshToken = newRefreshToken;
        await user.save();

        res.cookie("refreshToken",newRefreshToken,{
            httpOnly:true
        })

        res.status(200).json({
            message:"Access & Refresh Token Generated SuccessFully",
            accessToken:newAccessToken,
        })
        
       } catch (error) {
          res.status(401).json({
            message:"Invalid Token",
            error:[
                {
                    path:"Token",
                    message:"Invalid Token",
                }
            ]
          })
       }
}