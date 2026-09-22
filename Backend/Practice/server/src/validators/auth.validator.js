
import {body , validationResult} from "express-validator"

const registerValidator = [

     body("email")
        .exists().withMessage("Email is required").bail()
        .trim()
        .isString().withMessage("Email must be in String").bail()
        .isEmail().withMessage("Please enter valid Email").bail(),
      body("name")
        .exists().withMessage("Name is required").bail()
        .trim()
        .isString().withMessage("Name must be in String").bail()
        .isLength({min:2 , max:50}).withMessage("Name must at least 2 character and 50 charactes long.").bail(),
      body("password")
        .exists().withMessage("Password is required").bail()
        .trim()
        .isString().withMessage("Password must be in String").bail()
        .isLength({min:6}).withMessage("Password must be at least 6 character long.").bail(),
     (req,res, next)=>{

        const errors = validationResult(req)

 
         if(!errors.isEmpty()){

            return res.status(400).json({
                message:"Invalid Request",
                errors:errors.array(),
            })
         }

         next();  
     }
]

export default  registerValidator;