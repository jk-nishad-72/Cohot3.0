import express from "express"
import cookieParser from "cookie-parser"
import authRouter from "../routes/auth.route.js"
const app = express();


/**
 * middlewares
 */

app.use(express.json());
app.use(cookieParser());

/**
 * server check
 */

app.get("/api",async (req, res) => {

     res.send("Welcome to server")
    
})

/**
 * auth Routes
 */
app.use("/api/auth",authRouter)


export default app;