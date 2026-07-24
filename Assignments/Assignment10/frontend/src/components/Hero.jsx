import { motion } from "motion/react";
import { useNavigate } from "react-router";
import Button from "./Button"; // your existing Button component
// import Img from "./Img"; // your existing Img component

/**
 * Design notes
 * ------------
 * Palette   bg #F1EFE2 (sage parchment) · ink #172319 · moss #4C6B45 · gold #D6A23C · coral #D9755A (single accent, used once)
 * Type      Fraunces (display, italic swash on the eco word) + Manrope (body/UI)
 * Signature A slow-rotating dashed "seed ring" behind the photo cluster — an orbit/growth-cycle
 *           motif that ties back to "eco" without leaning on a leaf icon or the usual gradient blob.
 * Motion    Staggered entrance on load, a hand-drawn arrow that draws itself in toward the CTA,
 *           gentle hover lift on the photo cluster, continuous slow spin on the seed ring
 *           (paused for users with prefers-reduced-motion).
 */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};

export default function Hero() { 

  const navigate = useNavigate();

  const images = [
    {
      url: "https://plus.unsplash.com/premium_photo-1689539137236-b68e436248de?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rotate: -6,
      className: "w-40 h-52 md:w-44 md:h-60 -translate-y-4",
    },
    {
      url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rotate: 4,
      className: "w-36 h-48 md:w-40 md:h-56 translate-y-6",
    },
    {
      url: "https://plus.unsplash.com/premium_photo-1770660306212-ab28df3a7dfa?q=80&w=973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rotate: -3,
      className: "w-32 h-44 md:w-36 md:h-48 -translate-y-2",
    },
  ];

  return (
    <section className="relative overflow-hidden  px-6 py-20 md:px-16 lg:py-28">
      {/* ambient texture */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(#172319 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative mx-auto flex max-w-7xl flex-col items-center gap-16 lg:flex-row lg:items-center lg:justify-between"
      >
        {/* Left: copy */}
        <div className="max-w-xl text-center lg:text-left">
          <motion.span
            variants={fadeUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#4C6B45]/30 bg-[#4C6B45]/10 px-4 py-1.5 font-['Manrope'] text-sm font-medium tracking-wide text-[#4C6B45]"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#D9755A]" />
            Sustainably sourced, honestly made
          </motion.span>

          <motion.h1
            variants={fadeUp}
            className="font-['Fraunces'] text-[2.6rem] leading-[1.08] text-[#172319] sm:text-6xl lg:text-[3.75rem]"
          >
            Access to high&#8209;quality,{" "}
            <span className="italic text-[#4C6B45]">eco&#8209;friendly</span>{" "}
            products and services
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 font-['Manrope'] text-lg text-[#172319]/70"
          >
            Every product in our shelf is vetted for its footprint, not just its finish.
          </motion.p>

          <motion.div variants={fadeUp} className="relative mt-10 inline-flex items-center">
            {/* hand-drawn arrow pointing at the CTA — draws itself in */}
            <motion.svg
              width="90"
              height="60"
              viewBox="0 0 90 60"
              fill="none"
              className="mr-[-10px] hidden -translate-y-8 -rotate-[8deg] md:block"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.9, ease: "easeInOut" }}
            >
              <motion.path
                d="M4 6C28 6 46 26 82 40"
                stroke="#D6A23C"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              <path
                d="M68 34L83 41L74 53"
                stroke="#D6A23C"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>

            <Button
              value={"See Products"}
              textSize="text-lg"
              bgcolor="bg-black"
              textColor="text-white"
              onclick={() => navigate("/shop")}
              hoverBg="bg-white"
              hoverText="text-black"
            />

          </motion.div>
        </div>

        {/* Right: photo cluster + stat */}
        <motion.div variants={fadeUp} className="relative flex flex-col items-center gap-8">
          <div className="relative flex h-64 w-72 items-center justify-center sm:h-72 sm:w-80">
            {/* signature: slow-rotating dashed seed ring */}
            <svg
              viewBox="0 0 300 300"
              className="absolute inset-0 h-full w-full animate-[spin_38s_linear_infinite] motion-reduce:animate-none"
            >
              <circle
                cx="150"
                cy="150"
                r="138"
                fill="none"
                stroke="#4C6B45"
                strokeOpacity="0.35"
                strokeWidth="1.5"
                strokeDasharray="3 9"
                strokeLinecap="round"
              />
            </svg>

            <motion.div
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
              className="flex items-end gap-3"
            >
              {images.map((img, i) => (
                <div
                  key={i}
                  style={{ transform: `rotate(${img.rotate}deg)` }}
                  className={`overflow-hidden rounded-[2rem] border-4 border-[#FFFDF7] shadow-[0_18px_30px_-14px_rgba(23,35,25,0.35)] ${img.className}`}
                >
                  <img src={img.url} className="h-full w-full object-cover" />
                </div>
              ))}
            </motion.div>
          </div>

          {/* floating stat card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="flex items-center gap-4 rounded-2xl border border-[#172319]/10 bg-[#FFFDF7] px-6 py-4 shadow-[0_20px_40px_-24px_rgba(23,35,25,0.4)]"
          >
            <h2 className="font-['Fraunces'] text-3xl text-[#D6A23C]">500+</h2>
            <p className="font-['Manrope'] text-sm leading-tight text-[#172319]/70">
              Happy
              <br />
              Customers
            </p>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* fonts — move these <link> tags into your document head in production */}
      <link rel="preconnect" href="https://fonts.googleapis.com" /> 

      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}