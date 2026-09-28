
import express from "express"
import multer from "multer"
import { authenticate } from "../middlewares/auth.middleware.js";
import { createProductValidator } from "../validators/product.validator.js";
import { createProductController, 
        listAllProductController } from "../controllers/product.controller.js";

const upload = multer({
    storage:multer.memoryStorage(),
    limits:{
        files:5,
        fileSize:1 * 1024 * 2024 // 1mb 
    },

    // fileFilter:(req,file,cb) => {
    //     const allowedMimeType = ["image/jpeg" , "image/jpg" , "image/png"]
        
    // } 
})

const router = express.Router();


/**
 * @method POST
 * @route /api/products/
 * @description seller can create product and store it in DB , images will be stored in imagekit,
 * @access seller
 */ 

router.post("/",

    //----1. check user is authenticated or not | only for seller--------
    authenticate,
    //----2. check user is seller or not---------
    (req, res, next)=>{

      if(req.user.role !== "seller"){
        return res.status(403).json({
            message:"Access Forbidden | Only seller can create products"
        })
      }
      next();
    },

    // ---3.required for reading the data from req.body if the formate is form-data(multipart form data)
    upload.array("images"),

    // -- 

    (req, res , next)=>{

        req.body?.price && (req.body.price = JSON.parse(req.body.price))
        req.body?.sizes && (req.body.sizes = JSON.parse(req.body.sizes)) 
        next();

    },
 

    // ---5.validator
    createProductValidator,
    
    // ---6.controller
    createProductController ) 

/**
 * @method GET
 * @route /api/products/
 * @description Read all products from the DB
 * @access user
 */ 

router.get("/", 
    // ---- 
    authenticate,

    listAllProductController
)

export default router;

