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
import axios from "axios";

const Home = () => {

   
    const [urls , setUrls] = useState([]);
    const [urlInput , setUrlInput] = useState("");
    const [shortCode , setShortCode] = useState(null);

 

     // fetch all urls 

      const fetchURls = async () => {

                 const response = await axios.get("http://localhost:5173/api/url")

                 setUrls(response.data.data[0].urls);
               //   console.log(response.data.data[0]) 
      }

      // handl shorten urls 

      const handleShortenUrl = async () => {

         const response = await axios.post("http://localhost:5173/api/url",{url:urlInput})

         // console.log(response.data.data) 

         setShortCode({
            shortCode:response.data.data.shortcode,
            originURL:response.data.data.originURL 
         }) 


         setUrlInput("")
         fetchURls();
         
      }

    useEffect(()=>{

        fetchURls();

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

             onChange={(e)=>setUrlInput(e.target.value)}
             value={urlInput} 
             className="w-full h-full border-0   outline-0 text-lg"
             type="text" 
             placeholder="Paste your long URL here — (e.g. https://github.com/developer/project)"  />

             <button onClick={handleShortenUrl} className="bg-[#843fff]  text-white flex items-center gap-2  text-2xl px-3 py-2 rounded-md cursor-pointer">
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
                            <a href={`http://localhost:5000/api/url/${url.shortcode}`} target=" _blank" className=" flex gap-4 items-center  font-bold  cursor-pointer text-lg text-[#d2bbff]"> https://short.ly/{url.shortcode} <FaArrowUpRightFromSquare /> <span className=" text-sm font-semibold text-green-500 bg-green-100/10 px-2 py-1 rounded"> • Active  </span> </a>

                            {/* longUrl */}
                            <p className=" truncate w-120"> {url.originURL} </p>

                             <div className="flex gap-4">
                                {/* createdAt */}
                                <span className="flex gap-2 items-center text-[#ccc0cd]"> <IoMdTime/> Created {url.createdAt} ago • </span>
                                {/* clicks */} 
                                <button className="flex gap-2 items-center text-[#a3bef8]"> <LuTrendingUpDown/> {url.clicks} clicks </button> 
                             </div>
                             
                        </div>

                        <div className="flex gap-4">
                             <button className="bg-[#222a3d] text-white flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer active:scale-95  transition-all  duration-200 hover:bg-[#2f374c] hover:text-[#ceb1ff]"> <FaCopy size={16}/> Copy</button>
                             <button className="bg-[#222a3d] text-white flex items-center gap-2 px-3 py-2 rounded-md cursor-pointer active:scale-95 transition-all  duration-200 hover:bg-[#2f374c] hover:text-[#ceb1ff]"> <MdDelete size={16} />  Delete</button>
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