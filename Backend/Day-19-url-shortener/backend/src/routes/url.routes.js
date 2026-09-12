
import express from "express"
import { generateCode } from "../utils/generateCode.js";
import urlModel from "../models/url.model.js";


const router = express.Router();


/**
 * @POST /api/url
 * 
 * req.body  = {original:String}
 * 
 */

router.post('/',async (req,res)=>{
     
     const {url} = req.body;

    //  console.log(url.startsWith('http://'))

     
     if(!url){
        return res.status(400).json({message:"Please enter a URL"})
     }

     if((url.startsWith('http://') == false) && (url.startsWith('https://') == false)){

         return res.status(400).json({
            message:"Please enter a valid URL starting with http:// or https://"
         })
     }
      if(url.length > 2048){

         return res.status(400).json({
            message:"URL is too long"
         })
     }

    const code = generateCode();

    const newURL = await urlModel.create({
        originalURL:url,
        shortcode:code,
    })

    res.status(201).json({
        message:"URL shorted Successfully",
        data:[
            {
                originalURL:newURL.originalURL,
                shortcode:newURL.shortcode,
            }
        ]
    })
})


router.get("/",async(req,res)=>{

      const allURLs =  await urlModel.find();

      res.status(200).json({
        message:"All URLs",
        data:[
            allURLs
        ]
      })  

})


export default router