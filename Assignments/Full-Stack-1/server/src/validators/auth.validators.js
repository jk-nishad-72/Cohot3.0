
import {body , validationResult } from "express-validator"

export const registerValidator = [
    body("email")
       .exists().withMessage("Email is Required.").bail()
       .trim()
       .isString().withMessage("Email must be a String.").bail() 
       .isEmail().withMessage("Please enter valid email address"),
    body("name")
       .exists().withMessage("Name is Required.").bail()
       .trim()
       .isString().withMessage("Name must be a String.").bail() 
       .isLength({min:2,max:50}).withMessage("Name must be atleast 2 character long and atmost 50 character long."),
    body("password")
       .exists().withMessage("Password is Required.").bail()
       .trim()
       .isString().withMessage("Password must be a String.").bail() 
       .isLength({min:6}).withMessage("Password must be atleast 6 character long."),
    body("confirm_password")
       .exists().withMessage("Confirm Password is Required.").bail()
       .trim()
       .isString().withMessage("Confirm Password must be a String.").bail() 
       .isLength({min:6}).withMessage("Confirm Password must be atleast 6 character long.").bail()
       .custom((value , {req}) =>{

        if(value !== req.body.password){
            throw new Error("Both passwords do not match.")
        }
        return true; 
       }),

    (req , res , next)=>{

         const errors = validationResult(req);

         if(!errors.isEmpty()){

             return res.status(400).json({
                message:"Invalid Request",
                errors:errors.array(),
             })

         }
         next();
    }
    
]


export const loginValidator = [ 
    body("email")
       .exists().withMessage("Email is Required.").bail()
       .trim()
       .isString().withMessage("Email must be a String.").bail() 
       .isEmail().withMessage("Please enter valid email address"),
    body("password")
       .exists().withMessage("Password is Required.").bail()
       .trim()
       .isString().withMessage("Password must be a String.").bail() 
       .isLength({min:6}).withMessage("Password must be atleast 6 character long."),

    (req , res , next)=>{

         const errors = validationResult(req);

         if(!errors.isEmpty()){

             return res.status(400).json({
                message:"Invalid Request",
                errors:errors.array(),
             })

         }
         next();
    }
    
]

