

import About from "./About";
import Clients from "./Clients";
import { useNavigate } from "react-router";
 



const Home = () => {

   const navigate = useNavigate()

   

  return (
    <div className="  min-h-screen max-w-screen-xl mx-auto  " >
         <div className=" w-full h-full  gap-6 px-4 py-4  flex  flex-col md:flex-row justify-between  ">

                 <div className=" h-[400px] w-[50%] flex flex-col  items-start justify-between ">

                    <h1 className=" text-8xl font-semibold  " > Welcome to <span className=" font-light text-blue-600" >Client.</span>  </h1>
                    <p className=" text-xl opacity-70 " > A single place to manage all your clients.
                       Add the new clients.  
                       Update the  clients.  
                       Delete the  clients.  
                       Find the  clients.  
                       Search the  clients.  
                       </p>
                    <button onClick={()=>navigate('/clients') } className=" bg-blue-500 text-2xl text-white px-3 py-2 rounded-lg active:scale-95 transition-all duration-200 hover:cursor-pointer "> See Clients  </button>
                  </div>    
                  <div className=" w-[50%]   h-[50%]   rounded-xl overflow-hidden shadow-lg " >
                     <img  src="https://images.pexels.com/photos/12944654/pexels-photo-12944654.jpeg" alt="" className="w-full h-full" />
                  </div>               
         </div>
        <Clients />
        <About />
     
    </div>
  )
}

export default Home