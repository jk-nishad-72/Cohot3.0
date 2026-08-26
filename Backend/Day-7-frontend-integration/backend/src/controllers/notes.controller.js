const NoteModel = require("../models/notes.model");

// create

const createNoteController = async (req, res) => {
     
    try {
        
         let {title , description } = req.body;
        
         let note = await NoteModel.create({
           title,
           description,
         })
         
         res.status(201).json({
            message:"Note Created Succes",
            note:note
         })
       
    } catch (error) {
       
        res.status(500).json({
            message:"Note Created Error",
            Error:error
         })
        
    }
   
}

//get All Notes

const getAllNoteController =  async (req, res) => {
     
    try {
        
         let Notes = await NoteModel.find()
         
         res.status(200).json({
            message:"Get all Note  Succes",
            data:Notes 
         })
       
    } catch (error) {

        res.status(500).json({
            message:"Get All Note  Error",
            Error:error
         })   
    }
   
}


//get signle Notes

const getSingleNoteController =  async (req, res) => {
     
    try {
        
        let id =req.params.id
        console.log(id)
        
         let Notes = await NoteModel.findById(id)

         res.status(200).json({
            message:"Fetch single Note  Succes",
            note:Notes
         })
       
    } catch (error) {
       
        res.status(500).json({
            message:"Get Single Note  Error",
            Error:error
         })
        
    }
   
}

// update note
const updateNoteController =  async (req, res) => {
     
    try {
        let id =req.params.id
        let body = req.body
    
         let Notes = await NoteModel.findByIdAndUpdate(id , body ,{new:true})

         res.status(200).json({
            message:"Update Note  Succes",
            Updated_Note:Notes 
         })
       
    } catch (error) {
       
        res.status(500).json({
            message:"Get Single Note  Error",
            Error:error
         })
        
    }
   
}
// delete Note 

const deleteNoteController = async (req, res) => {

     try {  

          let id = req.params.id;

          await NoteModel.findByIdAndDelete(id)

          res.status(200).json({
            message:"Update Note  Succes",
            Updated_Note:Notes 
         })
        
        } catch (error) {

            res.status(500).json({
                message:"Delete Note  Error", 
                Error:error
             })
     }
    
}


module.exports = {
    createNoteController,
    getAllNoteController,
    getSingleNoteController,
    updateNoteController,
    deleteNoteController
    
}