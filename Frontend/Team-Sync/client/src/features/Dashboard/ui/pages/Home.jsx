
import React from 'react'
import { useDispatch } from 'react-redux'
import { toggleTheme } from '../../../../shared/state/themeSlice';

const Home = () => {

  const dispatch = useDispatch();


  return (
    <div> 
      Home
     <br />
     <br />
      <button onClick={()=>{ 
        dispatch(toggleTheme());
      }}> change theme </button>
    </div>
  )
}

export default Home 