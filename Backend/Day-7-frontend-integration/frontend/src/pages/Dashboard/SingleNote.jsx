
import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router'
import { singleNoteFun } from '../../api/notes.api'
import { useEffect } from 'react'

const SingleNote = () => {

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

  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      
      <h1>Title:{Note?.title}</h1>
      <h2>Description:{Note?.description}</h2> 
    </div>
  )
}

export default SingleNote