import React from "react";
import { motion } from "motion/react";

/**
 * Design notes
 * ------------
 * Bookends the hero: same ink background the hero's headline sits on top of,
 * so the page reads as one considered piece rather than a light hero + generic dark footer.
 * Fraunces for the wordmark, Manrope for the fine print.
 * The dashed ring from the hero's photo cluster reappears here in miniature,
 * split by the divider — a quiet callback rather than a repeated icon.
 */

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-black px-6 py-14 md:px-16">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#F1EFE2 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <motion.div 
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }} 
        className="relative mx-auto flex max-w-7xl flex-col items-center gap-8 text-center"
      >
        <h1 className="font-['Fraunces'] text-3xl italic text-[#F1EFE2] sm:text-4xl">
          Buyzaar
        </h1>

        {/* divider with the seed-ring motif at its center */}
        <div className="flex w-full max-w-xs items-center gap-3 sm:max-w-sm">
          <span className="h-px flex-1 bg-[#F1EFE2]/15" />
          <svg width="20" height="20" viewBox="0 0 20 20" className="shrink-0">
            <circle
              cx="10"
              cy="10"
              r="8.5"
              fill="none"
              stroke="#D6A23C"
              strokeWidth="1.2"
              strokeDasharray="2 5"
              strokeLinecap="round"
            />
          </svg>
          <span className="h-px flex-1 bg-[#F1EFE2]/15" />
        </div>

        <p className="font-['Manrope'] text-sm tracking-wide text-[#F1EFE2]/50">
          &copy; {year} Buyzaar.com — All rights reserved. Built with React.
        </p>
      </motion.div>

      


    </footer>
  );
};

export default Footer; 