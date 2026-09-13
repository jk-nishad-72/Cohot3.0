import urlModel from "../models/url.model.js";
import { generateCode } from "../utils/generateCode.js";




/**
 * @POST  /api/url Controller
 */
export const createShortCodeController = async(req, res)=>{

       let url = req.body.url;

       console.log(url)

      if(!url){
        return res.status(401).json({error:"Please enter a URL"})
      }

      if(url.startsWith('http:') == false &&  url.startsWith('https:') == false){

            return res.status(401).json({error:"Please enter a valid URL starting with http:// or https://"})

      }

      if(url.length > 2048){
        return res.status(401).json({error:"URL is too Long"})

      }


      let shortcode = generateCode();

      const newUrl = await urlModel.create({
        originalURL:url,
        shortcode:shortcode,
      })

      return res.status(201).json({
        message:"Short Code Generated ",
        data:[
            {
                  originalUrl:newUrl.originalUrl,
                  shortcode:newUrl.shortcode,
                  
            }
        ]
      })
    
}



/**
 * @GET /api/url Controller 
 */

export const getAllUrlsController = async (req ,res) => {


        const allURls = await urlModel.find();

         if(!allURls){
          return res.status(401).json({error:"NO any URLS exist's"})

         }
        res.status(200).json({
          Message:"All URLs",
          data:[
            allURls
          ]
        })
               
}

