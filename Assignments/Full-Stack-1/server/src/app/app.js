
import express from "express"
import cookieParser from "cookie-parser"
import authRouter from "../routes/auth.routes.js"

const app = express();


/**
 * --- MIDDLEWARES ---- 
 *  
 */ 
app.use(express.json());
app.use(cookieParser());

/**
 * --- SERVER - CHECKING --- 
 */
app.get("/api",async (req, res) => {

       res.status(200).json({
        message:"The server is live."
       })
})

/**
 *  @routes /api/auth
 *  @desc Auth routes for register, login, acces - refresh token, logout , get me , refresh-tokens
 *  @access seller / user 
 */

app.use("/api/auth",authRouter);

export default app;