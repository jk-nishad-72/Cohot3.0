

import React, { useState } from 'react'

const App = () => {

//** multiple useState  Handling 
   

let [count , setCount]  =  useState(0)
const [user, setUser] = useState({
   name:'jaykishan'
})

  return (


    <div>

        <h1>{ count} </h1>

        <button onClick={()=>{

          setCount(count+1)

        }}> Incrementent  </button>

        <h1> {user.name} </h1>

        <button onClick={()=>{


        //error because user is reference data  

          // setUser(user.name = 'kkkkkkkk')
              // or 

          // ase me agar koi dusra set function(setCount) jo bhi iske parent component ke under hai vo  chalega tab user.name render  hoga  ,  
          user.name = 'aman'  //-> ye value ko update karega but rerender nahi karega , value lexicalely store karke rakhta hai 
          setUser(user)    //-> rerender nahi karega , jab koi dusra set Function chalega to update value rerender ho jayegi 

          //  or 

          //correct way to update 

          // setUser({name:'kfjaksjdk'})
  
        }}> change name </button>



      
    </div>
  )
}

export default App