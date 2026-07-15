
import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Favourites from '../pages/Favourites';
import RecipeForm from '../pages/RecipeForm';
import NotFound from '../pages/NotFound';
import RecipeDetails from '../pages/RecipeDetails';


const Router = () => {
  return (
    <div  className=''>
        <Routes >
            <Route path='/' element={<Home/>} /> 
            <Route path='/auth' element={<Auth />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/create-recipe' element={<RecipeForm />} /> 

            <Route path='/recipe/:id' element={<RecipeDetails />} /> 


            <Route path='*' element={<NotFound />} /> 

        </Routes>
    </div>
  )
}

export default Router