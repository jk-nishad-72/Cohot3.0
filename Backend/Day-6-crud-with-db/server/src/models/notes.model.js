const { default: mongoose } = require("mongoose");


const notesSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,
        minlength: [20, "Minimun length is 20"]
    }
})

const NoteModel = mongoose.model('notes-model', notesSchema)

module.exports = NoteModel