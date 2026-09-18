

import {  body, validationResult} from "express-validator";


const registerValidator = [

     body("email")
     .exists().withMessage("Email is required")
     .isEmail().withMessage("Enter a valid email"),
     body("phone")
     .exists().withMessage("phone is required")
     .isMobilePhone("en-IN").withMessage("Enter a valid phone number"),
     body("password")
     .exists().withMessage("password is required")
     .trim().isLength({min:6}).withMessage("password should be at least 6 digits"),
     (req, res , next)=>{
        
        let erros = validationResult(req)

        if(!erros.isEmpty()){
            return res.status(400).json({
                message:"Invalid request",
                errors:erros.array(),
            })
        }
        next();

     }

]

export default registerValidator