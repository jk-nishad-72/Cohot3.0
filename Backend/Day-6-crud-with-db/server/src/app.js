

const express = require('express')
const connecToDB = require('./config/db.js')
const notesRoute = require('./routes/notes.route.js')

const app = express()

app.use(express.json())
connecToDB()

app.get('/',(req,res)=>{

    res.send('Welcome to note server')

})

// all notes feature 
app.use('/notes',notesRoute)


module.exports = app



