
import {motion} from "motion/react"
import { FiDelete, FiEdit, FiTrash } from "react-icons/fi";
import { deleteNoteFun } from "../api/notes.api";
import { useNavigate } from "react-router";


const NoteCard = ({ note ,cardVariants ,deleteNote}) => {
    
    const navigate = useNavigate()
    return (
        <motion.article 
            onClick={()=>{
                navigate(`/dashboard/view/${note._id}`)
            }}
            variants={cardVariants}
            whileHover={{ y: -4 }}
            transition={{ type: 'spring', stiffness: 300, damping: 22 }}
            className={`flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-md ${
            note.featured ? 'sm:col-span-2 lg:col-span-2 lg:row-span-2' : ''
            }`}
        >
            {note.image && (
            <div className="flex h-40 items-center justify-center bg-slate-200 text-xs text-slate-500">
                img
            </div>
            )}

            <div className="flex flex-1 flex-col p-5 gap-4">
            {/* <div className="flex flex-wrap gap-2">
                {note.tags.map((tag) => (
                <span
                    key={tag}
                    className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                    TAG_STYLES[tag] || DEFAULT_TAG_STYLE
                    }`}
                >
                    {tag}
                </span>
                ))}
            </div> */}

            <h3 className={`mt-3 font-bold text-slate-900 ${note.featured ? 'text-2xl' : 'text-lg'}`}>
                {note.title}
            </h3>

            <div > 
                {note.list ? (
                <ul className="mt-2 list-disc space-y-1 pl-4 text-sm text-slate-500">
                {note.list.map((li) => (
                    <li key={li}>{li}</li>
                ))}
                </ul>
            ) : (
                <p
                className={`mt-2 text-sm leading-relaxed text-slate-500 ${
                    note.featured ? '' : 'line-clamp-2'
                }`}
                >
                {note.description}
                </p>
            )}
            </div>

            

            {/* <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-3 text-xs text-slate-400">
                <span>{note.meta}</span>
                {note.folder && (
                <span className="flex items-center gap-1">
                    <FiFolder size={13} />
                    {note.folder}
                </span>
                )}
            </div> */} 


            <div className='flex w-full justify-between'>
                <button 

                 onClick={() => {
                    navigate(`/dashboard/update/${note._id}`)
                 }} 
                 className='flex cursor-pointer items-center gap-2 justify-between px-3  py-1 border border-slate-200 rounded-lg '>
                <FiEdit size={20} /> 
                </button> 

                <button 

                onClick={() =>deleteNote(note._id)}
                className='flex cursor-pointer items-center gap-2 justify-between px-3  py-1 border border-slate-200 rounded-lg '>
                    <FiTrash size={20} /> 
                </button> 
            </div>
            </div>
        </motion.article>
)};


export default NoteCard