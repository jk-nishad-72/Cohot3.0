// This is the page rendered inside <Outlet /> of DashBoardLayout.jsx
// e.g. <Route element={<DashBoardLayout />}><Route path="notes" element={<AllNotesPage />} /></Route>

import React from 'react';
import { motion } from 'motion/react';
import { FiFolder, FiFilter, FiChevronDown } from 'react-icons/fi';
import {deleteNoteFun, getAllNotesFun}  from "../../api/notes.api.jsx"
import { useEffect } from 'react';
import { useState } from 'react';
import NoteCard from '../../components/NoteCard.jsx';
const TAG_STYLES = {
  'Project Alpha': 'bg-indigo-100 text-indigo-700',
  Urgent: 'bg-rose-100 text-rose-600',
};
const DEFAULT_TAG_STYLE = 'bg-slate-100 text-slate-600';

// const notes = [
//   {
//     id: 1,
//     tags: ['Project Alpha', 'Q3 Planning'],
//     title: 'Q3 Strategic Goals & OKRs',
//     body: 'Drafting the preliminary objectives for Q3. Key focus areas include expanding the enterprise tier, optimizing the ingestion pipeline to reduce latency by 20%, and launching the new developer portal. We need to align with marketing on the launch date.',
//     meta: 'Updated 2 hours ago',
//     folder: 'Strategy',
//     featured: true,
//   },
//   {
//     id: 2,
//     tags: ['Meeting Notes'],
//     title: 'Weekly Sync - Design Team',
//     body: 'Discussed the new color tokens and elevation models. Need to update...',
//     meta: 'Yesterday, 2:30 PM',
//   },
//   {
//     id: 3,
//     tags: ['Ideas'],
//     title: 'Blog Post: Functional UI',
//     body: 'Outline for the upcoming article on designing systems for productivity...',
//     meta: 'Oct 24, 2023',
//   },
//   {
//     id: 4,
//     tags: ['Urgent'],
//     title: 'Fix Auth Bug',
//     body: 'Users reporting token expiration issues on mobile Safari. Check the refresh...',
//     meta: 'Oct 22, 2023',
//   },
//   {
//     id: 5,
//     tags: ['Personal'],
//     title: 'Grocery List',
//     list: ['Oat milk', 'Coffee beans (light roast)...'],
//     meta: 'Oct 20, 2023',
//   },
//   {
//     id: 6,
//     tags: ['Inspiration'],
//     title: 'New Office Layout',
//     body: 'Ideas for restructuring the open plan area to reduce noise and increase focus zones.',
//     meta: 'Oct 18, 2023',
//     image: true,
//   },
// ];

const containerVariants = {
  hidden: {},
  show: { 
    transition: { 
      staggerChildren: 0.06 
    } },
};


const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 16 
  },
  show: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.35, 
      ease: 'easeOut'
     } 
    },
};


const AllNotesPage = () => {
  
  const [notes , setNotes] = useState([])

  const allNotesfun = async () => {
    try {

      let result  = await getAllNotesFun()

      console.log('all notes Fun ',result.data);

      setNotes(result.data)
      
    } catch (error) {
      
       console.log(error);
       
    }
    
  } 

    const deleteNote = async (id) => {
    try {

      let result  = await deleteNoteFun(id)

      console.log('delete note Fun ',result.data);

      allNotesfun();
      
    } catch (error) {
      
       console.log(error);
       
    }
    
  } 


useEffect(()=>{
  allNotesfun() 
},[])

  return (
    <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8"> 

      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">All Notes</h2>
          <p className="mt-1 text-sm text-slate-500">{notes.length} items in your workspace</p>
        </div>

        <div className="flex gap-3">
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
            <FiFilter size={15} />
            Filter
          </button>
          <button className="flex items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50">
            <FiChevronDown size={15} />
            Last Modified
          </button>
        </div>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
      >
        {notes.map((note) => (
          <NoteCard 
          
          
          key={note._id} 
          note={note} 
          cardVariants={cardVariants} 
          deleteNote={deleteNote}/>
        ))}
      </motion.div>  

    </div>
  );
};


export default AllNotesPage;