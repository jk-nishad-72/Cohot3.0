
import jwt from "jsonwebtoken";
import dotenv from 'dotenv'
import authModel from "../models/auth.model.js";

dotenv.config();

export const authenticate = async (req , res, next) => {

             
     let token = req.headers.autherization

      console.log(token)

      if(!token){
        return res.status(401).json({
            message:"Token not found"
        })
      }

      let data = jwt.verify(token , process.env.JWT_SECRETE_KEY)

      const user = await authModel.findById(data.id)

      req.user = user
      next()

}