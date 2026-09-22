import { body , validationResult} from "express-validator"

const registerValidator = [

     body("email")
        .exists().withMessage("Email is required").bail()
        .trim()
        .isEmail().withMessage("Invalid email"),
    body("name")
        .exists().withMessage("Name is required").bail()
        .trim()
        .isString().withMessage("Name must be in String")
        .isLength({min:2 ,max:50}).withMessage("Name length must be between 2 & 50"),
    body("password")
        .exists().withMessage("Password is required").bail()
        .trim()
        .isString().withMessage("Password must be in String")
        .isLength({min:6}).withMessage("Password length must be 6 character long. "),
    (req, res,next)=>{

         const errors = validationResult(req)


         // this is correct 
         if(!errors.isEmpty()){

            return res.status(400).json({
                message:"Invalid request",
                errors:errors.array(),
            });
         }

         next();
    }

]


export default registerValidator;
