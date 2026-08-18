import { useEffect } from "react";
import axios from "axios";
import Form from "../components/Form"



const Home = () => {

    
     //Fetch the data from the  backend

     const getClients = async () => {

         try {

             let response = await axios.get(`http://localhost:3000/clients`)

              console.log('DATA', response.data);
              
            
         } catch (error) {
            
             console.log('Error occured while fetching the data', error);
             
         }
        
     }

     useEffect(()=>{
        getClients();
     },[])

  return (
    <div>


        Home 

      <Form />

    </div>
  )
}

export default Home