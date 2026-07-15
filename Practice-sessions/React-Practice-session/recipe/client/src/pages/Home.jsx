
import React from 'react'
import RecipeCard from '../components/RecipeCard'
import { useContext } from 'react';
import { MyRecipeStore } from '../context/MyRecipeContext';


const Home = () => {

      const { myrecipe } = useContext(MyRecipeStore);

  return (

          <> 
         
              
              <div>
                  <RecipeCard  myrecipe={myrecipe}/>
              </div>
          </>
  )
}

export default Home