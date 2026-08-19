import { useEffect, useState } from "react";
import Card from "../components/Card";
import axios from "axios";
import { getClients } from "../api/clientData";
import { useContext } from "react";
import { myClientContext } from "../context/ClientContext";


const Clients = () => {

const {clients} = useContext(myClientContext)
     
  return (
    <div className="  min-h-screen max-w-screen-xl mx-auto   ">

      <div className=" flex flex-col  w-full h-full gap-10 px-4 py-10 ">

            <div className=" w-[30%]     ">
                 <h1 className=" text-4xl font-semibold   " > All Clients </h1>
            </div>

            <div className=" grid md:grid-cols-3 gap-4  sm:grid-cols-1 "> 

               {
                clients?.map((user , index)=>(
                     <div key={index}>
                          <Card name={user.name} age={user.age} profession={user.profession} id={user?.id}  />
                     </div>
                ))
               }
 
            </div>
      </div>
    </div>
  )
}

export default Clients