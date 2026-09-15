
import { Bell, MenuIcon, Metronome, NotebookIcon, NotebookPen, Search, User2Icon } from 'lucide-react'
import React from 'react'

const TopNav = () => {
  return (
    <div className=' flex items-center justify-between'>
         {/* searchbar */}
         <div className='border border-gray-500 flex gap-3 px-3 py-2 rounded-md w-100' >
              <Search size={23} /> 
              <input
                 className='outline-0  w-full '
                 type="text" 
                 placeholder='Search workspace...'/>
         </div>

         <div className=' flex gap-4'>
                <Bell size={23} />
                <User2Icon size={23} /> 
                <MenuIcon  size={23}/>

         </div>
    </div>
  )
}

export default TopNav