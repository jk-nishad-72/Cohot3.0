import express from "express";
import urlRouter from "../routes/url.routes.js"
import connectTodb from "../config/db.js";
import urlModel from "../models/url.model.js";

const app = express();

app.use(express.json())



await connectTodb();


app.get("/",(req,res)=>{
    res.send("Hello")
})


//url routes
app.use("/api/url",urlRouter)

//redirect 

app.post("/:code",async (req,res)=>{

     let code = req.params.code;

     

     if(!code){
        return res.status(401).json({
            error:"Please enter code",
        })
     }

     let findUrl = await urlModel.findOne({
        shortcode:code,
     })

     if(!findUrl){
        return res.status(401).json({
            error:"URL NOT FOUND",
        })
     }
  

     console.log(code , findUrl.originalURL)
     res.redirect(302,findUrl.originalURL)

     await urlModel.findOneAndUpdate({
        shortcode:code,
     },
     {
        $inc:{clicks:1}
       
     }
    )
      
})


export default app;