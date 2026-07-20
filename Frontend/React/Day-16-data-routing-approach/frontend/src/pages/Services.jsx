import React from 'react';
import { NavLink } from 'react-router';
import { motion, useReducedMotion } from 'motion/react';
import { FiBookOpen, FiCloudDrizzle, FiTool, FiMapPin, FiUsers, FiRefreshCw } from 'react-icons/fi';

const RIPPLES = [0, 1, 2];
const PARTICLES = Array.from({ length: 10 }).map((_, i) => ({
  id: i,
  left: 8 + Math.random() * 84,
  top: 10 + Math.random() * 80,
  size: 2 + Math.random() * 3,
  delay: Math.random() * 4,
  duration: 5 + Math.random() * 4,
  gold: i % 4 === 0,
}));

const SERVICES = [
  {
    icon: FiBookOpen,
    title: 'Dive & Field Logging',
    body: 'Capture depth, duration, conditions, and notes in seconds, above water or below.',
  },
  {
    icon: FiCloudDrizzle,
    title: 'Tide & Weather Forecasts',
    body: 'Live tide windows and marine weather for your saved sites, updated automatically.',
  },
  {
    icon: FiTool,
    title: 'Gear Maintenance Tracker',
    body: 'Service reminders for regulators, tanks, and gear before they become a problem.',
  },
  {
    icon: FiMapPin,
    title: 'Site Mapping',
    body: 'Pin dive sites and routes, and find your way back to exactly where you were.',
  },
  {
    icon: FiUsers,
    title: 'Community Sharing',
    body: 'Share logs with your dive buddies, or keep them private. Your call, per entry.',
  },
  {
    icon: FiRefreshCw,
    title: 'Offline Sync',
    body: "Log from anywhere. Everything syncs the moment you're back in range.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Services = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full bg-[#F1F4F3]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      {/* hero banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#081C2B] via-[#0B2436] to-[#0D2A3D] px-6 sm:px-10 lg:px-16 pt-24 pb-20 lg:pt-32 lg:pb-28">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          {RIPPLES.map((i) => (
            <motion.span
              key={i}
              className="absolute rounded-full border border-[#3ED8C2]/40"
              style={{ width: 40, height: 40 }}
              animate={reduceMotion ? {} : { scale: [1, 9], opacity: [0.5, 0] }}
              transition={{ duration: 6, repeat: Infinity, delay: i * 1.8, ease: 'easeOut' }}
            />
          ))}
        </div>
        {!reduceMotion && (
          <div className="pointer-events-none absolute inset-0">
            {PARTICLES.map((p) => (
              <motion.span
                key={p.id}
                className={`absolute rounded-full ${p.gold ? 'bg-[#F2C572]' : 'bg-[#3ED8C2]'}`}
                style={{ left: `${p.left}%`, top: `${p.top}%`, width: p.size, height: p.size }}
                animate={{ y: [0, -14, 0], opacity: [0.15, 0.75, 0.15] }}
                transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: 'easeInOut' }}
              />
            ))}
          </div>
        )}

        <motion.div
          className="relative max-w-2xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          <motion.p
            variants={itemVariants}
            className="font-['JetBrains_Mono'] text-[11px] tracking-[0.25em] text-[#3ED8C2]/70 uppercase mb-5"
          >
            Services · Tidal
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="font-['Fraunces'] text-[32px] sm:text-[42px] leading-[1.15] text-[#F1F4F3]"
          >
            Everything your logbook needs.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[#8CA6B3] text-[15px] mt-5 leading-relaxed">
            From the first breath to the last tide check, Tidal keeps every detail in one place.
          </motion.p>
        </motion.div>
      </div>

      {/* services grid */}
      <motion.div
        className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 grid sm:grid-cols-2 lg:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {SERVICES.map((s) => (
          <motion.div
            key={s.title}
            variants={itemVariants}
            whileHover={{ y: -3 }}
            className="bg-white rounded-2xl border border-[#E3E9E7] p-6 transition-shadow hover:shadow-[0_16px_32px_-20px_rgba(15,38,53,0.25)]"
          >
            <span className="w-9 h-9 rounded-full bg-[#2FBFA8]/10 text-[#2FBFA8] flex items-center justify-center mb-4">
              <s.icon size={16} />
            </span>
            <h3 className="font-['Fraunces'] text-[#0F2635] text-[17px] mb-2">{s.title}</h3>
            <p className="text-[13px] text-[#64798A] leading-relaxed">{s.body}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="bg-[#0F2635] px-6 py-16 sm:py-20 text-center">
        <h2 className="font-['Fraunces'] italic text-[#F1F4F3] text-[24px] sm:text-[28px] mb-3">
          See it all in your own logbook.
        </h2>
        <p className="text-[#8CA6B3] text-[14px] mb-8">Free to sign up. No credit card, no boat required.</p>
        <NavLink to="/auth/register">
          <motion.span
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 bg-[#3ED8C2] hover:bg-[#33C4AF] text-[#0B2436] text-[14px] font-medium rounded-[10px] px-6 py-3 transition-colors"
          >
            Create your account 
          </motion.span>
        </NavLink>
      </div>
    </div>
  );
};

export default Services;