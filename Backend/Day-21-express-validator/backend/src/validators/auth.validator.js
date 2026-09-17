
import  {body , validationResult} from  "express-validator"


export const registerValidator =     [
    body("email")
    .exists().withMessage("Email is required")
    .isEmail().withMessage("Invalid email"),
    body("phone")
    .exists().withMessage("Phone is required")
    .isMobilePhone("en-IN").withMessage("Invalid Phone number"),
    body("password")
    .exists().withMessage("password is required")
    .trim().isLength({min:6}).withMessage("Password must be at least 6 character long"),
    (req , res, next)=>{

       const errors = validationResult(req);
       if(!errors.isEmpty()){
           return res.status(400).json({
               message:"Invalid request",
               errors:errors.array()
           })
       }
       next();
    }


]