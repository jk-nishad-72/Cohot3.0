import express from 'express';

const app = express();


app.get('/',(req,res)=>{

    res.send("welcome to you in my server")
})

export  default  app;


