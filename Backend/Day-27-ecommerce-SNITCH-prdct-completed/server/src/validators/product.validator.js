
import { body , validationResult } from "express-validator"


/**
 * 
*.       product :{
*.       title:"test title 1",
*.       description:"test description 1",
*.       images:["https://imagekit.io_1","https://imagekit.io_2"],
*.       price:{amount:100,currency:"INR"},
*.       sizes:[
*.       { size:"M",stock:20 },
*.       { size:"XL",stock:40}
*.       ],
*.       seller: seller_id
*.       
*.       }
 * 
 */

export const createProductValidator = [

     body("title")
       .exists().withMessage("Title is required").bail()
       .isString().withMessage("Title must be a String").bail()
       .trim()
       .isLength({min:2 , max:100}).withMessage("Title have characters between 2 to 100 long.")
       .isAlpha("en-US",{ignore:" "}).withMessage("Title must contain only English alphabest"),
    body("description")
       .exists().withMessage("Description is required").bail()
       .isString().withMessage("Description must be a String").bail()
       .trim()
       .isLength({min:20 , max:500}).withMessage("Description length must be  between 20 to 500 Characters."),
    body("price.amount")
       .exists().withMessage("Price is required").bail()
       .isFloat({min:0}).withMessage("Price must be in Float and greater than 0"),
    body("price.currency")
       .exists().withMessage("Currency is Required").bail()
       .isString().withMessage("Currency must be in String").bail()
       .isIn(["INR","USD"]).withMessage("Currency must be either INR or USD"),
   body("sizes")
       .exists().withMessage("Sizes is Required").bail()
       .isArray().withMessage("Sizes must be an Array of objects"),
    body("sizes.*.size")
       .exists().withMessage("size must be present in every entry of sizes").bail()
       .isString().withMessage("size must be a String").bail()
       .isIn(["XS","S","M","L","XL","XXL"]).withMessage("size can be one of these XS,S,M,L,XL,XXL"),
    body("sizes.*.stock")
        .exists().withMessage("stock must be present in every entry of sizes").bail()
        .isInt({min : 0}).withMessage("stock must be a Integer and value should be greater than 0"),
    (req, res, next)=>{

         const errors = validationResult(req)

         if(!errors.isEmpty()){
            return res.status(400).json({
                message:"Invalid product data",
                errors:errors.array()
            })
         }
         next();
    }
]