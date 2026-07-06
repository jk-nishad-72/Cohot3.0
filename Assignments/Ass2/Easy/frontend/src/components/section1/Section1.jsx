

import React from 'react'
import Navbar from './Navbar'
import Heading from '../Heading'
import Card from '../Card'

const Section1 = (props) => {


     let headings = props.headings

    //  console.log(headings);
     
    
let obj = [ {

     'image':'https://images.squarespace-cdn.com/content/v1/680f921dcceec04972a7e448/5136a977-d9db-4cdc-86b5-757e74bf0ae1/HGCFO+(11).jpeg',
     'cat':'Tech',
     'para':'The Ultimatem Guide To Saas Marketing',
     'date':'July 03 ,2026',
  },
{

     'image':'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8dXVVsDvSxj4OlMHOm2_8pLTld09xxRictQpcahVKzLaJzahm',
     'cat':'Saas',
     'para':'5 key trends in saas growth for 2025',
     'date':'July 03 ,2026',
  },

{
    'image':'https://static.vecteezy.com/system/resources/thumbnails/048/639/868/small/playful-cats-on-a-b-red-background-emphasizing-their-nature-free-photo.jpg',
     'cat':'Marketing',
     'para':'how data driven stretegies are important',
     'date':'July 03 ,2026',
  },

]
    


  return (


    <div className='h-w-[100%] bg-black text-2xl text-white  max-sm:w-[100%]  '>

        < Navbar />

         <div className="hero-heading flex items-center  justify-center h-[30vh] ">
             <h1 className='text-[12rem] font-semibold  max-sm:text-6xl max-sm:text-center'> Insight & Blogs </h1>
         </div>

         <div className="hero-text  flex items-center  justify-center h-[10vh]  w-full gap-[1.5rem]  max-sm:gap-2 "> 

            {
                headings.map((text)=>{

                    return  < Heading text = {text} />

                })
            }
            

         </div>

          <div className='h-[75vh] border-b-1  px-[1rem] w-[100%]  py-[2rem] flex  items-center gap-[1rem] justify-center max-sm:flex-col max-sm:h-[250vh]' >
            
           {
            obj.map((elem)=>{
              return  < Card  image = {elem.image} cat = {elem.cat} para = {elem.para}  date = {elem.date}/>
            })
           }
           
           
          </div>

          <div className='w-[100%]  h-[85vh]  py-3 bg-linear-to-t from-yellow-200 to-orange-700 relative max-sm:h-[40vh]'  >
                 <h1 className='text-[30rem]  font-semibold   absolute  text-amber-500 max-sm:text-[30vw] max-sm:bottom-0' >ScaleX</h1>             
             </div>
          
  
    </div>
  )
}

export default Section1