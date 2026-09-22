
import express from "express"
import cookieParser from "cookie-parser"
import authRouter from "../routes/auth.route.js"


const app  = express();


/**
 * USE MIDDLEWARES 
 */
app.use(express.json())
app.use(cookieParser())

/**
 * USER ROUTES
 */

/**
 *  @server - check 
 */

app.get("/api",(req, res)=>{
    res.send("welcome to in server")
})

/**
 * @ALL USER ROUTES 
 * auth routes
 */
app.use("/api/auth",authRouter)


export default app;