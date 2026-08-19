
import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

const Card = ({name , age , profession  , id}) => {

//     console.log(name , age , profession , id);

    
  return (
    <div key={id} className=" shadow-lg flex flex-col gap-2 p-4   items-start rounded-xl  cursor-pointer hover:scale-98 " > 

         <div className=" bg-slate-400  w-60 h-60 rounded-full   "  >
             {/* <img  src="" alt="" /> */}
         </div>
        <div className="" > 
             <h1 className=" font-semibold " > Name : <span className=" font-light text-gray-700 " >{name}</span></h1>
        </div>
        <div className="" ><h2 className=" font-semibold " >Age : <span className=" font-light text-gray-700 " >{age}</span></h2></div>
        <div className="" ><h2 className=" font-semibold " >Profession : <span className=" font-light text-gray-700 " >{profession}</span></h2></div>

        <div className=" flex gap-2 " >
             <button className=" bg-orange-500 hover:bg-orange-400 active:scale-95 transition-all duration-200 flex items-center gap-1 text-white px-2 py-1 rounded-md ">  Edit  <MdModeEdit /> </button>
             <button className=" bg-red-500 hover:bg-red-400 active:scale-95 transition-all duration-200 flex items-center gap-1 text-white px-2 py-1 rounded-md " >  Delete <MdDeleteForever /> </button>
        </div>
    </div>
  )
}

export default Card