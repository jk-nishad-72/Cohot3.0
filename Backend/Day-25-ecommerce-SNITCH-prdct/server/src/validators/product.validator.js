


import {body  , validationResult} from "express-validator"


export const createProductValidator = [

     body("price.currency")
       .exists().withMessage().bail()
       .isString().withMessage()
       .isIn(["INR" , "USD"]).withMessage("")
    

    


]

