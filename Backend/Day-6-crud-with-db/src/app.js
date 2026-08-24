
const express = require('express')

const app = express();
require('dotenv').config() 
const connectToDb = require('./config/db.js')



connectToDb()


app.get('/',(req, res)=>{

    res.send(`Welcome to notes Backend`);
    
})





module.exports  = app