import React from 'react'
import Section1 from './components/section1/Section1'

const App = () => {


  let headings = [

     {'text':'All',},
     {'text':'Tech',},
     {'text':'SaaS',},
     {'text':'Marketin',}

  ]

  return (

    <div className='h-[100%] w-[100%] bg-black  '>

       < Section1 headings = {headings} /> 

  
    </div>
  )
}

export default App