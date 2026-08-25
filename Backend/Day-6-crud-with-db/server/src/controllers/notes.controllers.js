

const NoteModel = require('../models/notes.model.js')




const createNoteController = async (req, res) => {


    try {
        let { title, description } = req.body;

        let note = await NoteModel.create({
            title,
            description
        })


        res.status(201).json({
            message: "Note Created",
            Note_title: note.title,
        })

    } catch (error) {

        console.log('Note Create error', error);

        res.status(500).json({
            message: "Internal server Error",
            api: " Note  Create error "
        })

    }

}

const allNotesController = async (req, res) => {

    try {

        let allNotes = await NoteModel.find();

        res.status(200).json({
            message: "All Notes",
            Notes: allNotes,
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal server Error",
            api: "Get all Notes error "
        })
    }


}

const getSingleNoteController = async (req, res) => {

    try {

        let id = req.params.id;

        let singlNote = await NoteModel.findById(id)

        res.status(200).json({
            message: "sigle Notes Fetched Succesfully",
            Notes: singlNote,
        })

    } catch (error) {

        res.status(500).json({
            message: "Internal server Error",
            api: "Get Single Note error "
        })

    }

}

const updateNoteController = async (req, res) => {

    try {

        let id = req.params.id;
        let body = req.body;

        let updatedNote = await NoteModel.findByIdAndUpdate(id, body, {
            new: true
        })

        res.status(200).json({
            message: " Note Updated Succesfully",
            Notes: updatedNote,
        })

    } catch (error) {
        res.status(500).json({
            message: "Internal server Error",
            api: " Update Note error "
        })
    }

}


const deleteNoteController = async (req, res) => {

    try {

        let id = req.params.id;

        await NoteModel.findByIdAndDelete(id)

        res.status(200).json({
            message: " Note Deleted Succesfully",

        })
    } catch (error) {
        res.status(500).json({
            message: "Internal server Error",
            api: " Update Note error "
        })
    }

}



module.exports = {
    createNoteController,
    allNotesController,
    getSingleNoteController,
    updateNoteController,
    deleteNoteController,
}