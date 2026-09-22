

import express from "express"
import authRouter from "../routes/auth.route.js"

const app = express();

app.use(express.json())


app.get("/",async (req,res) => {

     res.send("welcome in to server ")

    
})

app.use("/api/auth",authRouter)

export default app