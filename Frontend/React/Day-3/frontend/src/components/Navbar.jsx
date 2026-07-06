
import React from 'react'
import Home from '../pages/Home';

const Navbar = ({nav  , children}) => {

    // console.log(props.nav);

    //Or 

    console.log(nav) ;  // by using  object destructuring 

  return (
    
      nav === 'Home' ?  < Home  /> :
    
        <div>
          {nav}
          {children} 
        </div>

 
  )
}

export default Navbar 