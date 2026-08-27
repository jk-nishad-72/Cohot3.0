

const multer = require("multer")


const storage = multer.diskStorage({
    destination:(req, file , cb)=>{

         cb(null , "uploads/")
    },
    filename:(req , file , cb)=>{

         console.log("diskStorage me file ",file)
         cb(null , Date.now()+file.originalname)
    }
})

const storageForServer = multer.memoryStorage()

// const upload = multer({storage})
const upload = multer({storage :storageForServer})

module.exports = upload