import { useState } from "react";
import { createContext } from "react";


export const MyRecipeStore = createContext();

export const MyRecipeStoreProvider = ({children})=>{

    const [myrecipe , setMyRecipe] = useState(()=>{

        return JSON.parse(localStorage.getItem('myrecipe')) || []
    })

    
  const handleAddToFav = (id)=>{

    // or without localstorage

    // setMyRecipe(prev => {
    //     return prev.map(val =>{
    //         return val._id === id ? {...val , favorite:!val.favorite} :val
    //     })
    // })

    // with local storage to handle asynchornous execution 
    
    let arr = myrecipe.map(val => val._id === id ? {...val , favorite:!val.favorite} :val)

     setMyRecipe(arr)

     localStorage.setItem('myrecipe', JSON.stringify(arr))

    //Or 

//    useEffect(()=>{
        
//         localStorage.setItem('myrecipe' , JSON.stringify(myrecipe))

//      } , [myrecipe]) 
     
  }


     return (

         <MyRecipeStore.Provider value={{myrecipe , setMyRecipe ,handleAddToFav}} >
            {children}
         </MyRecipeStore.Provider>
     )
}