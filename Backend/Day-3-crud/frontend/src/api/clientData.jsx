
import { api } from "../config/api";


// GET client data  Function 
export  const getClients = async () => {

        try {

            let response = await api.get(`/clients`)

             console.log('Get Client api response', response.data.client);
             return response.data.client
             
        } catch (error) {
        
            console.log('Error occured while fetching the data', error);
            
        }
       
    }


// POST create client Function 

export const createClient = async (data) => {

    try {
        let res = await api.post('/create-client',data)
        console.log('Create client response',res.data);
        return res.data
        
     } catch (error) {
        console.log('Create client error',error);
     }
    
}
// PUT update client function 
export const  updateClientFun = async (data) => {

    try {
        let res = await api.put(`/update-client/${data.id}`,data)
        console.log('Update api response', res.data);
        return res.data
       
  } catch (error) {

       console.log('update api error',error);
  }
    
}

// DELETE delete client function 

export const deleteClinet = async (id) => {

    try {

        let res = await api.delete(`/delete-client/${id}` ,)
        console.log('client deleted api response' , res.data);
        return res.data
   } catch (error) {
       console.log('delete error', error);
   }
    
}