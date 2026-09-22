import {body , validationResult} from "express-validator"

export const registerValidator = [
   body("name")
       .exists().withMessage("Name is Required ").bail()
       .trim()
       .isLength({min:2, max:50}).withMessage("Name must be at least 2 and at most 50 characters long.").bail()
       .isString().withMessage("Name must be in String").bail(),
   body("email")
       .exists().withMessage("Email is Required ").bail()
       .trim()
       .isEmail().withMessage("Please enter valid Email").bail()
       .isString().withMessage("Email must be in String").bail(),
    body("password")
       .exists().withMessage("Password is Required ").bail()
       .trim()
       .isString().withMessage("Password must be in String").bail()
       .isLength({min:6}).withMessage("Password must be at least 6 character long.").bail(),

       (req,res,next)=>{

        const errors = validationResult(req)

        if(!errors.isEmpty()){

            return res.status(400).json({
                message:"Invalid request",
                errors:errors.array(),
            })
        }

        next();
       }
]

export const loginValidator = [

    body("email")
       .exists().withMessage("Email is Required ").bail()
       .trim()
       .isEmail().withMessage("Please enter valid Email").bail()
       .isString().withMessage("Email must be in String").bail(),
    body("password")
       .exists().withMessage("Password is Required ").bail()
       .trim()
       .isString().withMessage("Password must be in String").bail()
       .isLength({min:6}).withMessage("Password must be at least 6 character long.").bail(),

       (req,res,next)=>{

        const errors = validationResult(req)

        if(!errors.isEmpty()){

            return res.status(400).json({
                message:"Invalid request",
                errors:errors.array(),
            })
        }

        next();
       }
]
