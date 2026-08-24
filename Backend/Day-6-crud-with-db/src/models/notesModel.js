const { default: mongoose } = require("mongoose");



const noteSchema = new mongoose.Schema({

     titile:{
        type:String,
        required:true,

     }, 
     description:{
        type:String,
        required:true,
        minlength:[20,"Minimum length is 20 "]

     }
})

const NoteModel = mongoose.model('note-app',noteSchema)

module.exports = NoteModel