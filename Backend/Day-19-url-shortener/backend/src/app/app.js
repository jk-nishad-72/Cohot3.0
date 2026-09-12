
import express from "express";
import { connectToDB } from "../config/db.js";

import urlRouter from "../routes/url.routes.js";
import urlModel from "../models/url.model.js";



const app = express();

app.use(express.json())

await connectToDB()

app.get('/',(req,res)=>{

     res.send("Server Welcomes to you")

})

app.use('/api/url',urlRouter)  

app.get("/:code",async (req ,res) => {

      let code = req.params.code;

     let findUrl = await urlModel.findOne({
        shortcode:code
     })
     if(!findUrl){
        return res.status(400).json({error:"URL Not Found"})
     }

     res.redirect(302,findUrl.originalURL);

     await urlModel.findOneAndUpdate({
        shortcode:code
     },{
        $inc:{clicks:1}
     })

}) 

export default app
