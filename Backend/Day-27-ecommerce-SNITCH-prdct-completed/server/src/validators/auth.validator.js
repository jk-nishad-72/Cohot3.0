
import {body , validationResult} from "express-validator"


export const registerValidator = [
    body('email')
     .exists().withMessage("Email is required").bail()
     .trim()
     .isString().withMessage("Email must be In String").bail()
     .isEmail().withMessage("Please Enter valid Email Address"),
    body('name')
     .exists().withMessage("Name is required").bail()
     .trim()
     .isString().withMessage("Name must be In String").bail()
     .isLength({min:2,max:50}).withMessage("Name Must be at least 2 character long and at most 50 character long."),
    body('password')
     .exists().withMessage("Password is required").bail()
     .trim()
     .isString().withMessage("Password must be In String").bail()
     .isLength({min:6}).withMessage("Password must be at least 6 character long."),
    (req, res,next)=>{

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

     body('email')
     .exists().withMessage("Email is required").bail()
     .trim()
     .isString().withMessage("Email must be In String").bail()
     .isEmail().withMessage("Please Enter valid Email Address"),
    body('password')
     .exists().withMessage("Password is required").bail()
     .trim()
     .isString().withMessage("Password must be In String").bail()
     .isLength({min:6}).withMessage("Password must be at least 6 character long."),
    (req, res,next)=>{

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