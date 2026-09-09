
import express from "express";
import authRouter from "../routes/auth.route.js"

const app = express();


app.use(express.json())

app.get("/api" , (req,res)=>{
    res.send("Hii from api server")
}) ;

app.use("/api/auth",authRouter)



export default app;
