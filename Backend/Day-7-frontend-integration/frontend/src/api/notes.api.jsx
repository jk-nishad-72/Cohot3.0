import { api } from "../config/api";

// get All Notes fun 
export const getAllNotesFun = async () => {


     try {

        let response = await api.get('/allNotes')

        console.log('Get All Notes Response' , response.data);
        return response.data
     } catch (error) {

        console.log('Get All Notes Error',error);
        
        
     }
    
}

// Create Note Fun
export const createNoteFun = async (data) => {


     try {
        let response = await api.post(`/create`,data)
        console.log('Get All Notes Response' , response.data);
        return response.data
     } catch (error) {

        console.log('Get All Notes Error',error);
        
        
     }
    
}


// Delete Note Fun   
export const deleteNoteFun = async (id) => {

     try {
        console.log(id);
        
        let response = await api.delete(`/delete/${id}`) 

        console.log('Delete Note Response' , response);
        return response
     } catch (error) {

        console.log('Delete Note Error',error);
        
        
     }
    
}
// update Note Fun

export const updateNoteFun = async (id ,data) => {

     try {
        console.log(id);
        
        let response = await api.put(`/update/${id}`,data) 
        console.log('Update Note Response' , response);
        return response
     } catch (error) {

        console.log('Update Note Error',error);
        
     }
    
}


// Get single Note fun 

export const singleNoteFun = async (id) => {

     try {
        
        let response = await api.get(`/${id}`)   
      //   console.log('Single Note Response' , response);
        return response.data.note
        
     } catch (error) {
        console.log('Single Note Error',error);  
     }
   
}





