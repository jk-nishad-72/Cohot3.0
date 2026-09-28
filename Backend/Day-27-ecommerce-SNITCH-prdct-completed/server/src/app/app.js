

import express from "express"
import cookieParser from "cookie-parser"
import authRouter from "../routes/auth.route.js"
import productsRouter from "../routes/product.routes.js"



const app = express();


/**
 * middlewares
 */
app.use(express.json());
app.use(cookieParser());

/**
 * description check server
 * @GET /api/
 * 
 */

app.get("/api",async (req, res) => {

     res.status(200).json({
        message:"Welcome to server"
     })
    
})

/**
 * Auth Routes
 */
app.use("/api/auth",authRouter)

/**
 * Product Routes
 */
app.use("/api/products",productsRouter)


export default app;