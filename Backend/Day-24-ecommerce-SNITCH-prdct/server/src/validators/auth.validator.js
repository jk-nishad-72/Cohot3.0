

import { body , validationResult } from "express-validator"

export const registerValidator = [

    body("name")
       .exists().withMessage("name is required").bail()
       .trim()
       .isString().withMessage("name must be in String").bail()
       .isLength({min:2 , max:50}).withMessage("The name must be at least 2 character long and Maximum 50 character long."),
    body("email")
       .exists().withMessage("email is required").bail()
       .trim()
       .isString().withMessage("email must be in String").bail()
       .isEmail().withMessage("Please enter valid email"),
    body("password")
       .exists().withMessage("password is required").bail()
       .trim()
       .isString().withMessage("password must be in String").bail()
       .isLength({min:6 }).withMessage("The password must be at least 6 character long."),
  
     
     (req, res , next)=>{

         const errors = validationResult(req)

         if(!errors.isEmpty()){
            return res.status(400).json({
                message:"Invalid Request",
                errors:errors.array()

            })
         }
         next();
     }
]

export const loginValidator = [

   
    body("email")
       .exists().withMessage("email is required").bail()
       .trim()
       .isString().withMessage("email must be in String").bail()
       .isEmail().withMessage("Please enter valid email"),
    body("password")
       .exists().withMessage("password is required").bail()
       .trim()
       .isString().withMessage("password must be in String").bail()
       .isLength({min:6 }).withMessage("The password must be at least 6 character long."),
  
     (req, res , next)=>{

         const errors = validationResult(req)

         if(!errors.isEmpty()){
            return res.status(400).json({
                message:"Invalid Request",
                errors:errors.array()

            })
         }
         next();
     }
]