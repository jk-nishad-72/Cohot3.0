
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet } from 'react-router'
import Sidebar from '../../features/Dashboard/ui/components/Sidebar';
import TopNav from '../../features/Dashboard/ui/components/TopNav';

const DashboardLayout = () => { 
 
   const {mode} = useSelector((state)=>state.theme);


   useEffect(()=>{

    if(mode === "light"){
      document.body.classList.add("light");
    }else{
      document.body.classList.remove("light");
    }
   },[mode]);


  return (

    // layout using grid with grid-cols-[1fr_5fr] two colomns 
    // 1fr for sidebar and 5fr for main content
    <div className="grid grid-cols-[1fr_5fr] h-screen  ">

      {/* sidebar */}
        <div className=' bg-[var(--bg-surface)] border-r border-gray-700 shadow-xl' > 
         <Sidebar />
        </div> 

    {/* Main content */}
       <div className=' bg-[var(--bg-main)]  px-5 py-5 flex flex-col gap-10 ' >
         <div className='w-full '>
           <TopNav  />
         </div>
         <Outlet />
       </div>
    </div>
  )
}

export default DashboardLayout