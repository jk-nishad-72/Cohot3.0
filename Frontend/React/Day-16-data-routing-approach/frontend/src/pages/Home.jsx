import React, { useContext } from 'react';
import { motion } from 'motion/react';
import { FiBookOpen, FiDroplet, FiClock, FiPlus, FiChevronRight } from 'react-icons/fi';
import { MyContext } from '../context/AuthContext';

const STATS = [
  { icon: FiBookOpen, label: 'Last Log Entry', value: 'Blue Hole, Dahab', sub: '3 days ago' },
  { icon: FiDroplet, label: 'Water Temp', value: '24°C', sub: 'Surface reading' },
  { icon: FiClock, label: 'Next Tide', value: 'High · 14:32', sub: 'in 2h 14m' },
];

const ENTRIES = [
  { title: 'Blue Hole, Dahab', meta: 'Dive · 32m · 41min', date: 'Jul 18' },
  { title: 'Morning tide check', meta: 'Note · Reef flat', date: 'Jul 16' },
  { title: 'Sha’ab Abu Nuhas', meta: 'Dive · 18m · 55min', date: 'Jul 12' },
  { title: 'Gear maintenance log', meta: 'Note · Regulator service', date: 'Jul 09' },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Home = ({ userName = 'Jordan' }) => {  


  let {  
            users , 
            setUsers , 
            isLoggedIn , 
            setIsLoggedIn 

            } = useContext(MyContext)

          

  return (
    <div className="min-h-screen w-full bg-[#F1F4F3]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      <motion.div
        className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10 py-10 lg:py-14"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* header */}
        <motion.div
          variants={itemVariants}
          className="flex items-start sm:items-center justify-between gap-4 mb-10 flex-col sm:flex-row"
        >
          <div>
            <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.25em] text-[#2FBFA8]/80 uppercase mb-2">
              Dashboard
            </p>
            <h1 className="font-['Fraunces'] italic text-[#0F2635] text-[28px] sm:text-[32px]">
              Welcome back, {userName}
            </h1>
          </div>
          <motion.button
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-2 bg-[#0F2635] hover:bg-[#123047] text-[#F1F4F3] text-[14px] font-medium rounded-[10px] px-5 py-2.5 transition-colors shrink-0"
          >
            <FiPlus size={16} />
            New Entry
          </motion.button>
        </motion.div>

        {/* stat cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
          {STATS.map((stat) => (
            <motion.div
              key={stat.label}
              variants={itemVariants}
              className="bg-white rounded-2xl border border-[#E3E9E7] p-5 flex flex-col gap-3"
            >
              <span className="w-9 h-9 rounded-full bg-[#2FBFA8]/10 text-[#2FBFA8] flex items-center justify-center">
                <stat.icon size={16} />
              </span>
              <div>
                <p className="text-[12px] text-[#8CA0AC] mb-1">{stat.label}</p>
                <p className="font-['Fraunces'] text-[#0F2635] text-[20px] leading-tight">{stat.value}</p>
                <p className="text-[12px] text-[#B4C1C6] mt-0.5">{stat.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* recent entries */}
        <motion.div variants={itemVariants}>
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-['Fraunces'] italic text-[#0F2635] text-[19px]">Recent entries</h2>
            <button className="text-[13px] text-[#2FBFA8] hover:underline">View all</button>
          </div>

          <motion.div
            variants={containerVariants}
            className="bg-white rounded-2xl border border-[#E3E9E7] divide-y divide-[#EEF2F1] overflow-hidden"
          >
            {ENTRIES.map((entry) => (
              <motion.button
                key={entry.title}
                variants={itemVariants}
                whileHover={{ backgroundColor: '#F7FAF9' }}
                className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left transition-colors"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <span className="w-2 h-2 rounded-full bg-[#3ED8C2] shrink-0" />
                  <div className="min-w-0">
                    <p className="text-[14px] text-[#0F2635] font-medium truncate">{entry.title}</p>
                    <p className="text-[12px] text-[#8CA0AC] mt-0.5">{entry.meta}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[12px] text-[#B4C1C6] font-['JetBrains_Mono']">{entry.date}</span>
                  <FiChevronRight size={15} className="text-[#B4C1C6]" />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Home;