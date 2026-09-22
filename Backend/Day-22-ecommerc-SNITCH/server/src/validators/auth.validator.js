
import {body , validationResult} from "express-validator"


 const registerValidator  = [

     body("email")
        .exists().withMessage("Email is required").bail()
        .trim()
        .isEmail().withMessage("Invalid Email Address"),
        
    body("name")
        .exists().withMessage("Name is required").bail()
        .trim()
        .isString().withMessage("Name must be in String")
        .isLength({min:2 , max:50}).withMessage("Name must be 2 character minimum and 50 maximum"),
    body("password")
        .exists().withMessage("Password is required")
        .isString().withMessage("Password must be string")
        .isLength({min:6}).withMessage("Password must be 6 character long"),
    
    (req, res , next)=>{
         
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

 export default registerValidator;

