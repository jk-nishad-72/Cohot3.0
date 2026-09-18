import Hero from "../components/Hero.jsx"
import Navbar from "../components/Navbar.jsx"
import { MdDelete, MdInsertLink } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";
import { FaCopy } from "react-icons/fa";
import { MdLink } from "react-icons/md";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { LuTrendingUpDown } from "react-icons/lu";
import Footer from "../components/Footer.jsx";
import { useEffect, useState } from "react";

const Home = () => {


   let dummyURLs = [
                  {
                    "_id": "6aac793439b1643eeda37f26",
                    "originURL": "https://www.shopsy.in/zebronics-county-pro-11-dual-drivers-tws-btv5-4-mic-input-carry-handle-rgb-lights-16-w-bluetooth-home-audio-speaker/p/itm23f203331eca2?pid=ACCHEB3PCDDNCPXC&lid=LSTACCHEB3PCDDNCPXCVRFJP4&marketplace=FLIPKART&store=0pm%2F0o7",
                    "shortcode": "CONtu5",
                    "clicks": 0,
                    "createdAt": "2026-09-17T23:35:16.778Z",
                    "updatedAt": "2026-09-17T23:35:16.778Z",
                    "__v": 0
                },


                  {
                    "_id": "6aac793439b1643eeda37f26",
                    "originURL": "https://www.shopsy.in/zebronics-county-pro-11-dual-drivers-tws-btv5-4-mic-input-carry-handle-rgb-lights-16-w-bluetooth-home-audio-speaker/p/itm23f203331eca2?pid=ACCHEB3PCDDNCPXC&lid=LSTACCHEB3PCDDNCPXCVRFJP4&marketplace=FLIPKART&store=0pm%2F0o7",
                    "shortcode": "CONtu5",
                    "clicks": 0,
                    "createdAt": "2026-09-17T23:35:16.778Z",
                    "updatedAt": "2026-09-17T23:35:16.778Z",
                    "__v": 0
                },

   ]
    const [urls , setUrls] = useState([]);
    const [urlInput , setUrlInput] = useState(null);
    const [shortCode , setShortCode] = useState(null);

 

      const fetchURls = async () => {

         
         
      }

    useEffect(()=>{

       setUrls(dummyURLs);

    },[])

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
             placeholder="Paste your long URL here — (e.g. https://github.com/developer/project)"  />

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
                      <p className="bg-[#222a3d] px-3 py-1 rounded-2xl text-sm text-[#d2bbff]">2 active </p>
                   </div>
                 
                    <button className=" px-2 py-1 bg-[#222a3d] text-base  rounded-md  cursor-pointer">Clear All</button>
                </div>

         {/* list item  */}

              {
               urls.map((url , idx)=>{
                   return (
               <div key={idx} className=" border  bg-[#131b2e] px-10 py-8  rounded-md ">
                    <div className=" flex items-center gap-5 justify-between text-white ">

                         <button className="bg-[#222a3d] text-white flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer">
                           <MdLink size={30} color="#d2bbff"  />
                         </button>

                        <div className="flex gap-4 flex-col">

                             {/* shortCode */}
                            <h2 className=" flex gap-4 items-center  font-bold  cursor-pointer text-lg text-[#d2bbff]"> https://short.ly/v8xK9p <FaArrowUpRightFromSquare /> <span className=" text-sm font-semibold text-green-500 bg-green-100/10 px-2 py-1 rounded"> • Active  </span> </h2>

                            {/* longUrl */}
                            <p className=" truncate "> {url.originURL} </p>

                             <div className="flex gap-4">
                                {/* createdAt */}
                                <span className="flex gap-2 items-center text-[#ccc0cd]"> <IoMdTime/> Created {url.createdAt} ago • </span>
                                {/* clicks */} 
                                <button className="flex gap-2 items-center text-[#a3bef8]"> <LuTrendingUpDown/> {url.clicks} clicks </button> 
                             </div>
                             
                        </div>

                        <div className="flex gap-4">
                             <button className="bg-[#222a3d] text-white flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer"> <FaCopy size={16}/> Copy</button>
                             <button className="bg-[#222a3d] text-white flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer"> <MdDelete size={16} />  Delete</button>
                        </div>
                        
                    </div>
              </div>

                   )
               })
              }
                

              

         </div>

     </section>

     <Footer />

    </div>

  )
}

export default Home