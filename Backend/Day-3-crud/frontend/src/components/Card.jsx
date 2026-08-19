
import { MdModeEdit } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";
import { toast } from "react-toastify";
import { deleteClinet,  } from "../api/clientData";
import { useContext } from "react";
import { myClientContext } from "../context/ClientContext";
import { useNavigate } from "react-router";

const Card = ({name , age , profession  , id}) => {

//     console.log(name , age , profession , id);

const {setUpdateClient ,  fetchData} = useContext(myClientContext)
const navigate = useNavigate()


const handleUpdate = async () => {
  
         setUpdateClient({name , age , profession , id})
         navigate('/create-client') 
}

const handleDelete = async(id)=>{
      
    try {
        let result = await deleteClinet(id)
        console.log('Card delete result' , result);

        toast.error('Client Deleted !')
        fetchData()
    } catch (error) {
      console.log('Card delete error',error);

    }
}


  return (
    <div key={id} className=" shadow-lg flex flex-col gap-2 p-4   items-center rounded-xl  cursor-pointer hover:scale-98 transition-all duration-300 hover:shadow " > 

         <div className=" bg-slate-400  w-60 h-60 rounded-full  overflow-hidden  "  >
             <img className=" h-full w-full object-cover"  src="https://plus.unsplash.com/premium_vector-1727956885330-0b80b9df0fc7?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /> 
             
         </div>
        <div className="" > 
             <h1 className=" font-semibold " > Name : <span className=" font-light text-gray-700 " >{name}</span></h1>
        </div>
        <div className="" ><h2 className=" font-semibold " >Age : <span className=" font-light text-gray-700 " >{age}</span></h2></div>
        <div className="" ><h2 className=" font-semibold " >Profession : <span className=" font-light text-gray-700 " >{profession}</span></h2></div>

        <div className=" flex gap-2 " >
             <button onClick={handleUpdate} className=" bg-orange-500 hover:bg-orange-400 active:scale-95 transition-all duration-200 flex items-center gap-1 text-white px-2 py-1 rounded-md ">  Edit  <MdModeEdit /> </button>
             <button onClick={()=>handleDelete(id)} className=" bg-red-500 hover:bg-red-400 active:scale-95 transition-all duration-200 flex items-center gap-1 text-white px-2 py-1 rounded-md " >  Delete <MdDeleteForever /> </button>
        </div>
    </div>
  )
}

export default Card