

const express = require('express')
const jwt = require('jsonwebtoken')



const app = express();
require('dotenv').config()




app.use(express.json())


app.get("/",(req, res)=>{

      res.send(' Welocome to server ')

})


app.post("/api/auth",async (req, res)=>{

    const { name ,email , password }  = req.body;


   let token = jwt.sign({email , password } , "4324ffd9aa9fe1a12f2f9c056563e57a8727b4f76894a8522d28e36534bcf51b")


   console.log(token);
   
    res.status(201).json({
        succes:true,
        Message:"Token Created ",
        token:token
    })
})


module.exports = app