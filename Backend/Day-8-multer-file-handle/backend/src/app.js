

const express = require("express")

const app = express(); 


app.get('/',(req,res)=>{

    res.send('Welcome to Server ')
})

module.exports = app