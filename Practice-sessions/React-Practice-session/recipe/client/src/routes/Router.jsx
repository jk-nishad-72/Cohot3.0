
import React from 'react'
import { Routes, Route, Outlet } from "react-router-dom";
import Auth from '../pages/Auth';
import Home from '../pages/Home';
import Favourites from '../pages/Favourites';
import RecipeForm from '../pages/RecipeForm';


const Router = () => {
  return (
    <div  className=''>
        <Routes >
            <Route path='/' element={<Home/>} />
            <Route path='/auth' element={<Auth />} />
            <Route path='/favourites' element={<Favourites />} />
            <Route path='/create-recipe' element={<RecipeForm />} />

        </Routes>
    </div>
  )
}

export default Router