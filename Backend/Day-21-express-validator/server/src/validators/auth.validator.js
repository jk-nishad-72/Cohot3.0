
import {body , validationResult} from "express-validator"


const registerValidator = [

       body("email")
       .exists().withMessage("Email is Required.")
       .isEmail().withMessage("Invalid Email."),
       body("phone")
       .exists().withMessage("Phone is required.")
       .isMobilePhone("en-IN").withMessage("Invalid Phone Number."),
       body("password")
       .exists().withMessage("Password is required.")
       .trim().isLength({min:6}).withMessage("Password Must be 6 character long."),

       (req, res, next)=>{
          let errors = validationResult(req)

          if(!errors.isEmpty()){
            return res.status(400).json({
                message:"Invalid request",
                errors:errors.array(),
            })
            
          }
          next();
       }

]

export default registerValidator;

