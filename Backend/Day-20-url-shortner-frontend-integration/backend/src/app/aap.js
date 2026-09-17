
import express from "express"
import connectTodb from "../config/db.js"
import urlRouter from "../routes/url.route.js"
const app = express();

app.use(express.json())



await connectTodb();


app.get("/",( req, res)=>{

     res.send("Welcome to server ")

})

// url features 
app.use("/api/url",urlRouter)


export default app



