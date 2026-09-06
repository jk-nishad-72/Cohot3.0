import authModel from "../models/auth.model.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs"
import {config} from "../config/config.js";

export const registerController = async (req, res)=>{

    try{
        const {name, email, password} = req.body;

        // data checking
        if(!name || !email || !password){

            return res.status(400).json({
                message:"Please fill all the fields"
            })
        }

        // check if user already exist
        let isexist = await authModel.findOne({email})

        if(isexist){
            return res.status(400).json({
                message:"User already exist"
            })
        }

        let newUser = await  authModel.create({
            name,
            email,
            password:await  bcrypt.hash(password, 10),
        })

        let token = jwt.sign({
                id:newUser._id,
            },
            config.JWT_SECRETE_KEY
        )

        res.cookie("token", token,)
        res.status(201).json({
            message:"User Created Successfully",
            data:{
                user:newUser,
                token:token
            }
        })

    }catch (error){
        res.status(500).json({
            message:"Internal server error"
        })

    }

}

export const loginController =async (req, res) => {

      try{

          const {email , password} = req.body;

          if(!email || !password) {
              return res.status(400).json({
                  message:"Please fill all the fields"
              })
          }

          let findUser = await  authModel.findOne({email})

          if(!findUser){
              return res.status(400).json({
                  message:"User doesn't exist"
              })
          }



          let isValidPass = await bcrypt.compare(password , findUser.password)

          // console.log(findUser.password , password , isValidPass)
          if(!isValidPass){
              console.log("Invalid password")
              return  res.status(400).json({
                  message:"Invalid password"
              })
          }

          let token = jwt.sign({id:findUser._id} , config.JWT_SECRETE_KEY)

          res.cookie("token", token,)
          res.status(200).json({
              message:"Login Successfully",
              data:{
                  user:findUser,
                  token:token
              }
          })

      }
      catch (e) {
          res.status(500).json({
              message:"Internal server error",
              error:e
              }
           )
          
      }
}

export  const authMeController = async (req, res) => {

    try{

        let token  = req.cookies.token;

        if(!token){
            return res.status(400).json({
                message:"Please login first",
            })
        }

        let isValed = jwt.verify(token, config.JWT_SECRETE_KEY);

        if(!isValed){
            return  res.status(400).json({
                message:"Please login first",
            })
        }


         let user = await  authModel.findById(isValed.id)


        res.status(200).json({
            message:"User data",
            data:{
                user:user
            }
        })
    }catch (error){
        res.status(500).json({
            message:"Internal server error"
        })
    }
}


