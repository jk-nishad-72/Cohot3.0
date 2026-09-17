import { RiLink } from "react-icons/ri"


const Hero = () => {


  return (
    <div className="w-full  flex flex-col    items-center  py-20 gap-15 ">
         <div className=" cursor-pointer w-16 h-16 rounded-xl bg-[#222a3d] border-[#5c588b] shadow-md hover:shadow-lg hover:border-[#7240b5]   border flex items-center justify-center 
             ">
             <div className="">
                 <RiLink  color="white" size={50} /> 
             </div> 
         </div>

         <div className=" flex  flex-col  items-center gap-5 text-center  ">
             <h1 className= " font-bold text-6xl text-[var(--text-heading)]">Shorten your  <span className="text-[#8245ee]"> links in seconds. </span></h1>
             <p className="text-gray-500 text-xl w-3/4 text-white">A blazing fast, privacy-focused URL shortener with real-time analytics, instant QR
codes, and custom alias support.</p>
         </div>
         <div className=" text-[var(--text-heading)] ">
              <div className="flex  text-sm   items-center gap-10 ">
                <p className="px-3 py-1 border-gray-500 border rounded-2xl">• 12.4M+ shortened</p>
                <p className="px-3 py-1 border-gray-500 border rounded-2xl">• 99.99% uptime</p>
                <p className="px-3 py-1 border-gray-500 border rounded-2xl">• Zero redirects lag</p>
              </div>
         </div>
    </div>
  )
}

export default Hero