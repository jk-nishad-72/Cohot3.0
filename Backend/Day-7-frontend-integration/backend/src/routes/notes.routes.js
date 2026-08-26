

const express = require('express');
const router = express.Router();
const {
    createNoteController ,
    getAllNoteController,
    getSingleNoteController,
    updateNoteController,
    deleteNoteController,

}  = require('../controllers/notes.controller.js')

 

 //notes routes 

 //1 create Note

 router.post('/create',createNoteController) 

 // 2 get All Notes 

 router.get('/allNotes',getAllNoteController) 

 // 3 get single Notes 
 router.get('/:id',getSingleNoteController)


 
 // 4 Update  Notes 

 router.put('/update/:id',updateNoteController)

 
 // 5 Delete  Notes 

 router.delete('/delete/:id',deleteNoteController)





module.exports = router