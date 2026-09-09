
export const registerController = async (req, res) => {

     try {
        const {name , email , password } =  req.body;



         
     } catch (error) {
        
        res.status(500).json({
            message:"internal  server Registeration error",
            error:error.message
        })
     }
    
}