
import { json } from "express";
import urlModel from "../models/url.model.js";
import generateCode from "../utils/generateCode.js";



// create short urls 

export const shortCodeController  = async (req, res) => {

     try {
        
          let {url} = req.body;

          if(!url){
            return res.status(401).json({message:"Please enter url "})
          }

          if(!url.startsWith("http:") === false && !url.startsWith("https:") ===false ){

            return res.status(401).json({message:"Please enter valid URL starting with http:// or https://"})
          }

          if(url.length > 2048){
            return res.status(401).json({message:"Url is too long"})

          }

         let shortcode = generateCode();

         let created = await urlModel.create({
            originURL:url,
            shortcode:shortcode,
         })

         res.status(201).json({
            message:"short Url created",
            data:{
                originURL:created.originURL,
                shortcode:created.shortcode,
            },
         })

     } catch (error) {
        console.log('error',error);

         res.status(500).json({
            error:"Intervel server erroor"
         })
        
     }
    
}

// get all urls
export const getAllUrlsController = async (req, res) => {

     try {

        let urls = await urlModel.find();

        if(!urls){
            return res.status(401).json({message:"No Urls found"})
        }

        res.status(200).json({
            message:"All url details",
            data:[
                {
                    urls:urls,
                }
            ]
        })
        
     } catch (error) {

        res.status(500).json({message:"Internal server error"})
        
     }
    
}

// redirect on original link

export const redirectController = async (req , res) => {

     try {
        
         let {code} = req.params;

         if(!code){
            return res.status(401).json({message:"Please enter code"})
         }

         let url = await urlModel.findOne({
            shortcode:code
         })

         if(!url){
            return res.status(401).json({message:"url not found"})

         }

         res.redirect(302, url.originURL)

         await urlModel.findOneAndUpdate({
            shortcode:code
         },{
            $inc:{clicks:1}
         })

        //  return res.status(200).json({
        //     message:"url found successfully",
        //     data:url,
        //  }) 

     } catch (error) {

        res.status(500).json({
            message:"Internal server error"
        })
        
     }
    
}
// delet url 


export const deleteController = async (req, res) => {

     try {

        let {code} = req.params;

        if(!code){
            return res.status(401).json({message:"Please enter code"})
        }

        await urlModel.findOneAndDelete({
            shortcode:code
        })

        res.status(200).json({
            message:"url deleted succesfully"
        })
        
     } catch (error) {

         res.status(401).json({
            message:"Inernal server error",
         })
        
     }
    
}