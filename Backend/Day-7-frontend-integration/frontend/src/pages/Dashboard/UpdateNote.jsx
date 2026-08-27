
import React from 'react'
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router';
import { singleNoteFun, updateNoteFun } from '../../api/notes.api';
import { useState } from 'react';
import NoteForm from '../../components/NoteForm';

const UpdateNote = () => {


     let {id} = useParams()
     const [Note , setNote] = useState(null)
     const navigate = useNavigate()
    

     const getSinglNote = async () => {

         try {
            let result = await singleNoteFun(id)

             console.log('get Single Note for update',result);
             setNote(result)
             
         } catch (error) {

            console.log('Single Note Data is Here',error);
            
            
         }
        
     }
   useEffect(() => {
        getSinglNote()
     }, [])  
     
     const handleSubmit = async (data) => {
        // e.g. await api.createNote(data)

        console.log('Update note', data);

        try {
          
          let result = await updateNoteFun(id,data)

          console.log("Update Form result",result);
          
        } catch (error) {

          console.log('Update Note Fun Error',error);
         
        }
        navigate('/dashboard/allNotes'); 
      }; 

  
    
  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
          <NoteForm mode="edit" initialTitle={Note?.title} initialContent={Note?.description}  onSubmit={handleSubmit} onCancel={() => navigate(-1)} /> 
    </div>
  )
}

export default UpdateNote