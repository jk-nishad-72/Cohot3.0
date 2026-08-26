
const mongoose = require('mongoose')


const notesSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,

    },
    description:{
        type:String,
        require:true,
        minlength:[20 , "Minimum length is 20"]
    }
})

const NoteModel = mongoose.model('note-model',notesSchema)

module.exports  = NoteModel