// npm i framer-motion  (imported below as "motion/react" — works with the new
// unified "motion" package; if you're on classic framer-motion, change the
// import to `from 'framer-motion'` instead)
// npm i react-icons
// react-router (or react-router-dom) already assumed to be set up in your app

import React, { useState } from 'react';
import { Outlet, NavLink, useNavigate } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';


import {
  FiFileText,
  FiStar,
  FiFolder,
  FiTag,
  FiArchive,
  FiSettings,
  FiHelpCircle,
  FiPlus,
  FiBell,
  FiMoon,
  FiSearch,
  FiMenu,
  FiX,
} from 'react-icons/fi';

const navItems = [
  { label: 'All Notes', icon: FiFileText, to: '/dashboard/allNotes' },
  { label: 'Favorites', icon: FiStar, to: '/dashboard/favorites' },
  { label: 'Notebooks', icon: FiFolder, to: '/dashboard/notebooks' },
  { label: 'Tags', icon: FiTag, to: '/dashboard/tags' },
  { label: 'Archive', icon: FiArchive, to: '/dashboard/archive' },
];

const DashBoardLayout = () => {

  const [mobileNavOpen, setMobileNavOpen] = useState(false);



  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Desktop sidebar */}
      <aside className="hidden w-72 shrink-0 flex-col border-r border-slate-200 bg-white px-5 py-6 lg:flex">
        <SidebarContent onNavigate={() => {}} />
      </aside>

      {/* Mobile sidebar drawer */}
      <AnimatePresence>
        {mobileNavOpen && (
          <React.Fragment key="mobile-nav">
            <motion.div
              className="fixed inset-0 z-40 bg-slate-900/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileNavOpen(false)}
            />
            <motion.aside
              className="fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-white px-5 py-6 shadow-2xl lg:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'tween', duration: 0.25, ease: 'easeOut' }}
            >
              <button
                onClick={() => setMobileNavOpen(false)}
                className="absolute right-4 top-4 rounded-lg p-1.5 text-slate-400 hover:bg-slate-100"
                aria-label="Close menu"
              >
                <FiX size={20} />
              </button>
              <SidebarContent onNavigate={() => setMobileNavOpen(false)} />
            </motion.aside>
          </React.Fragment>
        )}
      </AnimatePresence>

      {/* Main column */}
      <div className="flex min-w-0 flex-1 flex-col">
        <Topbar onMenuClick={() => setMobileNavOpen(true)} />
        <main className="flex-1 overflow-y-auto"> 

          <Outlet />
        </main>
      </div>
    </div>
  );
};

const SidebarContent = ({ onNavigate }) => {
    
    
    const navigate = useNavigate()
    
return( 
  <>
    <div className="flex items-center gap-3 px-1">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-slate-200 text-[10px] font-medium text-slate-500">
        img
      </div>
      <div>
        <h1 className="text-xl font-bold leading-tight text-indigo-600">Notes Pro</h1>
        <p className="text-xs text-slate-400">Personal Workspace</p>
      </div>
    </div>

    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="mt-6 flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 py-2.5 text-sm font-semibold text-white shadow-sm shadow-indigo-200 hover:bg-indigo-700"
      onClick={()=>navigate('/dashboard/addNote')} 
    >
      <FiPlus size={16} />
      New Note
    </motion.button>

    <nav className="mt-6 flex flex-1 flex-col gap-1">
      {navItems.map(({ label, icon: Icon, to }) => (
        <NavLink
          key={label}
          to={to}
          onClick={onNavigate}
          end
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
              isActive
                ? 'bg-indigo-50 text-indigo-600'
                : 'text-slate-500 hover:bg-slate-50 hover:text-slate-700'
            }`
          }
        >
          <Icon size={17} />
          {label}
        </NavLink>
      ))}
    </nav>

    <div className="mt-auto flex flex-col gap-1 border-t border-slate-100 pt-4">
      <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50">
        <FiSettings size={17} />
        Settings
      </button>
      <button className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-slate-500 hover:bg-slate-50">
        <FiHelpCircle size={17} />
        Help
      </button>
    </div>
  </>
)};

const Topbar = ({ onMenuClick }) => (
  <header className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-3 sm:px-6">
    <button
      onClick={onMenuClick}
      className="rounded-lg p-2 text-slate-500 hover:bg-slate-100 lg:hidden"
      aria-label="Open menu"
    >
      <FiMenu size={20} />
    </button>

    <div className="relative hidden max-w-md flex-1 sm:block">
      <FiSearch
        className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
        size={16}
      />
      <input
        type="text"
        placeholder="Search notes..."
        className="w-full rounded-lg border border-slate-200 bg-slate-50 py-2 pl-9 pr-3 text-sm text-slate-700 placeholder:text-slate-400 focus:border-indigo-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-100"
      />
    </div>

    <div className="ml-auto flex items-center gap-2 sm:gap-3">
      <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Notifications">
        <FiBell size={18} />
      </button>
      <button className="rounded-lg p-2 text-slate-500 hover:bg-slate-100" aria-label="Toggle theme">
        <FiMoon size={18} />
      </button>
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-slate-200 text-[10px] font-medium text-slate-500">
        img
      </div>
    </div>
  </header>
);

export default DashBoardLayout; 