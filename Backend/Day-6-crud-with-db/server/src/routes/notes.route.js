

const express = require('express');
const {
    createNoteController,
    allNotesController,
    getSingleNoteController,
    updateNoteController,
    deleteNoteController,
} = require('../controllers/notes.controllers.js')



const router = express.Router();

// create note 
router.post('/create', createNoteController)

// get all Notes 
router.get('/allNotes', allNotesController)

// get one specific note

router.get('/:id', getSingleNoteController)

// update 
router.put('/update/:id', updateNoteController)


// deleted
router.delete('/delete/:id', deleteNoteController)




module.exports = router 
