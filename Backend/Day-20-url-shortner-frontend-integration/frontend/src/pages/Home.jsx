import Hero from "../components/Hero.jsx"
import Navbar from "../components/Navbar.jsx"
import { MdDelete, MdInsertLink } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { CiLink } from "react-icons/ci";
import { FaCopy } from "react-icons/fa";



const Home = () => {


  return (


    <div className=" bg-[#0b1326]  min-h-screen  min-w-screen flex flex-col gap-10 ">

     <nav className=" w-full p-8">
            <Navbar />
     </nav>

     <main className=" flex items-center justify-center ">
        <Hero />
     </main>

  {/* Input section  */}

     <section className=" flex w-full  items-center justify-center  ">
         <div className=" w-[65%] h-[150px] border border-gray-500 rounded-2xl shadow-2xl  px-4 py-4  bg-[#131b2e] text-sm text-[#d6c5ff] ">  

            <div className=" w-full bg-[#060e20]  flex items-center rounded-2xl justify-between px-5 py-3 gap-2  ">  

             <MdInsertLink color="white" size={24} />

             <input 
             className="w-full h-full border-0   outline-0 text-lg"
             type="text" 
             placeholder="Paste your long URL here— (e.g. https://github.com/developer/project)"  />

             <button className="bg-[#843fff]  text-white flex items-center gap-2  text-2xl px-3 py-2 rounded-md cursor-pointer">
                Shoreten <FaLocationArrow size={24}/>
             </button>
            
           </div>
         </div>
     </section>


     {/* render urls  */}

     <section className="w-full min-h-[600px] "> 

         <div className=" w-[65%] mx-auto h-full flex flex-col gap-10 ">
                <div  className=" w-full flex items-center justify-between text-[var(--text-heading)] ">
                   <div className=" flex gap-4 items-center  ">
                      <h1 className="text-4xl font-bold">Recent Links </h1> 
                      <p className="bg-[#222a3d] px-3 py-1 rounded-2xl text-sm">2 active </p>
                   </div>
                 
                    <button className=" px-2 py-1 bg-[#222a3d] text-base  rounded-md  cursor-pointer">Clear All</button>
                </div>

{/* list item  */}
              <div className=" border border-gray-500   ">

                    <div className=" flex items-center gap-5 justify-between text-white ">

                        <CiLink />
                        <div>

                            <h2>fkajskfjkajsfda </h2>
                            <p>kfkaskfkasfkjaksjfkajkj</p>
                             
                        </div>


                        <div>
                             <button> <FaCopy size={16}/> Copy</button>
                             <button> <MdDelete size={16} />  Delete</button>
                        </div>
                        
                    </div>
                   
              </div>
         </div>

     </section>

    </div>

  )
}

export default Home