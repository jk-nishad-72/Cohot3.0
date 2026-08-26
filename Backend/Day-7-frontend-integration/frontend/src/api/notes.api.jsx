import { api } from "../config/api";


export const getAllNotes = async () => {


     try {

        let response = await api.get('/allNotes')

        console.log('Get All Notes Response' , response.data);
        return response.data
     } catch (error) {

        console.log('Get All Notes Error',error);
        
        
     }
    
}

