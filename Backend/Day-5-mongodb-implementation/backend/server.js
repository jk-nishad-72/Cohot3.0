


const express = require('express')
const app = express();
require('dotenv').config()
const connectToDB = require('./src/DB/db.js')
const NotesModel = require('./src/model/noteModel.js')

connectToDB()

let PORT = 3000;

app.use(express.json())

app.get('/',(req, res)=>{

    res.send('Welcome to server')

})


app.post('/create',async(req,res)=>{

    let {title , description}  = req.body

    console.log(title , description);
    
    const notes = await NotesModel.create({
        title,
        description
    })


    res.json({
        message:'recieved',
        request:notes
    })
})



app.listen(PORT, ()=>{
    console.log(`Server is running on port ${PORT}`)
})


