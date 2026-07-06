import React from 'react'
import Navbar from './components/Navbar'
import Tasks from './components/Tasks'
import Header from './components/Header'
import User from './components/User'
import Footer from './components/Footer'
import Main from './components/Main'

const App = () => {



  //* Babel ->  is A transpilar that transpile the 

  //  let rh1 = React.createElement('h1', {} , "hello")

  
  //  return rh1

    //  or  both are same 


  return (
    <div> 

      {/* {  Navbar(   'Home')} */}

       {/* or */}

       
       < Tasks />

        <Navbar  nav ='Home'   />
        <Navbar  nav ='About'   /> 


          {/* 

              <Navbar  
              nav ='About' 
              children = { <h1>Hii I am Contact Page </h1> }
                /> 
            
                or 
           */}
           
        <Navbar  nav ='contact' > 

           <h1>Hii I am Contact Page </h1>

        </Navbar>
        

{/* Layout with jsx + function components  */}
        < Header />
        < Main />
        < Footer />

{/* resuable components with different data  */}

        < User  name= 'jay' age = {20} isLogedIn = {true} />
        < User  name= 'jay' age = {20} isLogedIn = {false} />
        

        <h1> Hello </h1> 




       
    </div>
  )
}

export default App