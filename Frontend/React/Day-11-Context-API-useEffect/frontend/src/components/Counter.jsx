
import React, { useContext } from 'react'
import { ThemeStoreContext } from '../context/ThemeContext'

const Counter = () => {

   const {count ,increment , decrement , reset , theme }  =  useContext(ThemeStoreContext)

  return (


    <div className={' w-full h-screen flex items-center justify-center gap-8   flex-col ' + (theme ==="light"? "text-black bg-white " : "text-white bg-black") } > 

                <div>  { count } </div>

                <div>
                     <button onClick={decrement}>  Decrement -  </button>
                     <button onClick={reset}> Reset 0  </button>
                     <button onClick={increment}> Increment + </button> 
                </div>
      

    </div>
  )
}

export default Counter