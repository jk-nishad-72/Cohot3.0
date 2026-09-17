import { FaCode } from "react-icons/fa";
import { FaRegMoon } from "react-icons/fa";
import { CiUser } from "react-icons/ci";
import { RiLink } from "react-icons/ri";


const Navbar = () => {
  return (
    <div className=" bg-[#0f172a] text-[var(--text-heading)]  flex justify-between py-4 px-10 border  border-gray-800 shadow-xl rounded-lg "> 
         <div className=" flex items-center gap-5 ">
             <div className=" flex items-center  gap-2"> 
                <div className=" flex  items-center justify-center text-white bg-purple-600  border-0  rounded-xl  p-2 ">
                   <RiLink size={24} />
                </div> 

                   <h1 className=" text-2xl font-bold">Shortly.</h1> 
                  <span className=" bg-[#222a3d] text-[#d6c5ff] px-2 py-1 rounded-xl text-sm "> Utility</span>
             </div>

             <div className=" flex items-center  gap-4 text-lg">
                  <h3 className=" px-2 py-1 bg-[#222a3d]  rounded-md  cursor-pointer">Shortener</h3>
                  <h3 className=" px-2 py-1 bg-[#222a3d]  rounded-md cursor-pointer">Analytics Pro</h3>
             </div>
             
         </div>

        <div className=" flex items-center gap-5"> 
            <div className=" flex items-center gap-2">
                 <h3 className=" px-2 py-1 bg-[#222a3d]  rounded-md" > <FaCode size={24} /></h3>
                 <h3 className=" px-2 py-1 bg-[#222a3d]  rounded-md"> <FaRegMoon  size={24}/>  </h3>
            </div>
            <div>
                <h3 className=" px-2 py-1 bg-[#222a3d]  rounded-md">Login</h3>
            </div>
            <div>
                 <h3 className=" bg-[#d2bbff] text-[#7240b5] px-2 py-1 hover:bg-[#7240b5] hover:text-[#d2bbff]  rounded-md "><CiUser size={24}/></h3>
            </div>
        </div>
    </div>
  )
}

export default Navbar