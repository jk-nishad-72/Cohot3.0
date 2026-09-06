import express from  'express'
import  authRouter from "../routes/auth.route.js"
import cookieParser from "cookie-parser"

const app = express();

// middleware
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRouter)


app.get("/api",(req, res)=>{
    res.send("welcome in server ")

})

export default app;