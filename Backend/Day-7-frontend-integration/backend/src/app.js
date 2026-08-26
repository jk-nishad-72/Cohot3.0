

const express  = require('express')
require('dotenv').config()

const app = express();
const connectToDB  = require('./config/db.js')
const notesRouter = require('./routes/notes.routes.js')
const cors = require('cors')


//Database connctions
connectToDB()

// middlewares
app.use(cors({
    origin:"http://localhost:5173",
}))
app.use(express.json())


app.get('/',(req,res)=>{
 
    res.send("Welcome to my Server")

})

//features

app.use('/notes',notesRouter)

module.exports = app