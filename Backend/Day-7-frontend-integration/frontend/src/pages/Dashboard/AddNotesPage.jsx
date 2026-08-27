// This is the page rendered inside <Outlet /> of DashBoardLayout.jsx for
// creating a note, e.g.
//   <Route path="notes/new" element={<AddNotesPage />} />
//
// To reuse for editing, a sibling route can render the same NoteForm with
// the existing note's values, e.g.:
//   <NoteForm
//     mode="edit"
//     initialTitle={note.title}
//     initialTags={note.tags}
//     initialContent={note.content}
//     onSubmit={handleUpdate}
//     onCancel={() => navigate(-1)}
//   />

import React from 'react';
import { useNavigate } from 'react-router';
import { FiFolder, FiChevronRight } from 'react-icons/fi';
import NoteForm from '../../components/NoteForm';
import { createNoteFun } from '../../api/notes.api';


const AddNotesPage = () => { 


  const navigate = useNavigate();

  const handleSubmit = async (data) => {
    // e.g. await api.createNote(data)

    console.log('create note', data);

    try {
      
      let result = await createNoteFun(data)

      console.log("Create Form result",result);
      
    } catch (error) {

      console.log('Create Note Fun Error',error);
     
    }
    navigate('/dashboard/allNotes'); 
  };


  return (
    <div className="mx-auto max-w-5xl px-4 py-6 sm:px-6 lg:px-8">
      {/* <nav className="flex items-center gap-1.5 text-sm text-slate-500">
        <FiFolder size={15} />
        <span>Notebooks</span>
        <FiChevronRight size={14} className="text-slate-300" />
        <span className="font-medium text-indigo-600">Drafts</span>
      </nav> */} 

      <div className="mt-4">
        <NoteForm mode="create" onSubmit={handleSubmit} onCancel={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default AddNotesPage; 