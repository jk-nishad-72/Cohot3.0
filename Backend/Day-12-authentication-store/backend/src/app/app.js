
import express from "express";
import authRouter from "../routes/auth.route.js"

const app = express();

// middlewares

app.use(express.json()) 



app.get("/",(req, res)=>{

     res.send("Welcome to Server")

})


app.use('/api/auth' , authRouter)

export default app 