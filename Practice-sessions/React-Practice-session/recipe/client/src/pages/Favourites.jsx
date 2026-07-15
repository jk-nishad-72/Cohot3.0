
import React, { useContext } from 'react'
import RecipeCard from '../components/RecipeCard'
import { MyRecipeStore } from '../context/MyRecipeContext'

const Favourites = () => {

    let {myrecipe } = useContext(MyRecipeStore)

    let fav = myrecipe.filter(val => val.favorite === true) 

  return (
    <div> 
      
         <RecipeCard  myrecipe={fav}/>

    </div>
  )
}

export default Favourites