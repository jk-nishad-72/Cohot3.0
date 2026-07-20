import React from 'react';
import { NavLink } from 'react-router';
import { motion, useReducedMotion } from 'motion/react';
import { FiCompass, FiWind, FiShield } from 'react-icons/fi';

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

const STATS = [
  { value: '2019', label: 'Founded' },
  { value: '12,400+', label: 'Entries logged' },
  { value: '46', label: 'Countries' },
];

const VALUES = [
  {
    icon: FiCompass,
    title: 'Precision',
    body: 'Every reading, every timestamp, exactly as you logged it. No rounding, no guesswork.',
  },
  {
    icon: FiWind,
    title: 'Simplicity',
    body: 'Three fields to sign in, two taps to log a dive. Nothing else gets in your way.',
  },
  {
    icon: FiShield,
    title: 'Trust',
    body: "Your logbook is yours. We don't sell it, and you can export it whenever you like.",
  },
];

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const About = () => {
  const reduceMotion = useReducedMotion();

  return (
    <div className="w-full bg-[#F1F4F3]">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;1,9..144,500&family=Inter:wght@400;500;600&family=JetBrains+Mono:wght@400;500&display=swap');
      `}</style>

      {/* hero banner */}
      <div className="relative overflow-hidden bg-gradient-to-br from-[#081C2B] via-[#0B2436] to-[#0D2A3D] px-6 sm:px-10 lg:px-16 pt-24 pb-32 lg:pt-32 lg:pb-40">
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
            About · Tidal
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="font-['Fraunces'] text-[32px] sm:text-[42px] leading-[1.15] text-[#F1F4F3]"
          >
            Built by people who'd rather be underwater.
          </motion.h1>
          <motion.p variants={itemVariants} className="text-[#8CA6B3] text-[15px] mt-5 leading-relaxed">
            Tidal started as a waterproof notebook. It's a little more reliable now.
          </motion.p>
        </motion.div>
      </div>

      {/* stats strip */}
      <div className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 -mt-14 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="bg-white rounded-2xl border border-[#E3E9E7] shadow-[0_20px_40px_-24px_rgba(15,38,53,0.25)] grid grid-cols-3 divide-x divide-[#EEF2F1] overflow-hidden"
        >
          {STATS.map((s) => (
            <motion.div key={s.label} variants={itemVariants} className="px-4 py-7 text-center">
              <p className="font-['Fraunces'] text-[#0F2635] text-[24px] sm:text-[28px]">{s.value}</p>
              <p className="text-[12px] text-[#8CA0AC] mt-1">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* story */}
      <motion.div
        className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-start"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        <motion.div variants={itemVariants}>
          <p className="font-['JetBrains_Mono'] text-[11px] tracking-[0.25em] text-[#2FBFA8] uppercase mb-3">
            Our story
          </p>
          <h2 className="font-['Fraunces'] italic text-[#0F2635] text-[24px] mb-4">
            We kept losing pages to salt water.
          </h2>
        </motion.div>
        <motion.div variants={itemVariants} className="text-[#54697A] text-[15px] leading-relaxed space-y-4">
          <p>
            A rubber-banded notebook, then a spreadsheet, then a spreadsheet that got corrupted on a boat with no
            signal. Somewhere around the third lost logbook, we decided to build the thing we actually needed.
          </p>
          <p>
            Tidal is small on purpose — a place to record what happened, when, and where, without asking you to
            manage a social network first.
          </p>
        </motion.div>
      </motion.div>

      {/* values */}
      <motion.div
        className="max-w-4xl mx-auto px-6 sm:px-10 lg:px-16 pb-20 lg:pb-28 grid sm:grid-cols-3 gap-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
      >
        {VALUES.map((v) => (
          <motion.div
            key={v.title}
            variants={itemVariants}
            className="bg-white rounded-2xl border border-[#E3E9E7] p-6"
          >
            <span className="w-9 h-9 rounded-full bg-[#2FBFA8]/10 text-[#2FBFA8] flex items-center justify-center mb-4">
              <v.icon size={16} />
            </span>
            <h3 className="font-['Fraunces'] text-[#0F2635] text-[17px] mb-2">{v.title}</h3>
            <p className="text-[13px] text-[#64798A] leading-relaxed">{v.body}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA */}
      <div className="bg-[#0F2635] px-6 py-16 sm:py-20 text-center">
        <h2 className="font-['Fraunces'] italic text-[#F1F4F3] text-[24px] sm:text-[28px] mb-3">
          Ready to start your logbook?
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

export default About;