import userModel from "../models/user.model.js";
import generateToken from "../utils/auth.utils.js";
import bcrypt from "bcryptjs";


/**
 * @description register user and save user data on db
 * @param {express.Request} req 
 * @param req.body -> object 
 * @param req.body.email :String,
 * @param req.body.name :String,
 * @param req.body.password :String,
 * @param {express.Response} res  
 */
export const registerController = async (req , res) => {

     const {email , name , password } = req.body;
     
     const isAlreadyExists = await userModel.findOne({
        email
     })
        // exist means true 
        if(isAlreadyExists){
        // valid and important error formate 
        return res.status(400).json({
            message:"User Already exists ",
            error:[
                {
                    field:"email",
                    message:"User already exists Please enter valid email"
                }
            ]
        })

     }

     const user = await userModel.create({
        email,
        name,
        passwordHash:await bcrypt.hash(password , 10)
     })

     const {accessToken , refreshToken} = generateToken({userId:user._id, role:user.role});

      user.refreshToken = refreshToken;

      await user.save();


      res.cookie("accessToke",accessToken)
      res.status(201).json({
        message:"User registered successfully",
        
      }) 
    
}