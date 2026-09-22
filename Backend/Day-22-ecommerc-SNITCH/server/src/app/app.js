
import express from "express"
import connectTodb from "../config/db.js";
import authRouter from "../routes/auth.routes.js"


const app = express();

app.use(express.json())

await connectTodb();

app.get("/",(req, res)=>{

    res.send("Welcome in Ecommerce Server")

})

app.use("/api/auth",authRouter)



export default app;