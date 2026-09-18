

import express from "express"
import connectTodb from "../config/db.js";
import authRouter from "../routes/auth.routes.js"

const app = express();

app.use(express.json());
await connectTodb();

app.get("/",async (req, res) => {

     res.send("welcome in server ")
    
})

// auth features

app.use("/api/auth",authRouter)

export default app