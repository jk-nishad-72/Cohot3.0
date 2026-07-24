import React from "react";
import { motion } from "motion/react";
import Footer from "../components/Footer";
import { FiShoppingBag } from "react-icons/fi";
import { BsBoxSeam } from "react-icons/bs";
import { FaUserFriends } from "react-icons/fa";
import { IoMdStarOutline } from "react-icons/io";
import { TbTruckDelivery, TbHeartHandshake } from "react-icons/tb";
import { IoShieldCheckmark, IoStarHalfOutline } from "react-icons/io5";
import CtaBlock from "../components/CtaBlock";

/**
 * Design notes
 * ------------
 * Same system as Hero/Footer: parchment #F1EFE2, ink #172319, moss #4C6B45,
 * gold #D6A23C, coral #D9755A (single sparing accent). Fraunces for display,
 * Manrope for body/UI. The dashed seed-ring motif reappears once more, behind
 * the badge icon, so all three pieces of the page read as one family.
 *
 * Structure fixes from the draft: the stats array was declared twice and the
 * map wasn't actually rendering each item — consolidated into one `stats`
 * array and one `values` array, each properly mapped.
 */

const stats = [
  { icon: <BsBoxSeam />, title: "20k", desc: "Products" },
  { icon: <FaUserFriends />, title: "50k", desc: "Happy Customers" },
  { icon: <IoMdStarOutline />, title: "4.8", desc: "Average Rating" },
  { icon: <TbTruckDelivery />, title: "99%", desc: "On-time Delivery" },
];

const values = [
  {
    icon: <IoShieldCheckmark />,
    title: "Trust",
    desc: "Every product is verified for quality and authenticity before listing.",
  },
  {
    icon: <TbTruckDelivery />,
    title: "Speed",
    desc: "We obsess over delivery times so your orders arrive when promised.",
  },
  {
    icon: <TbHeartHandshake />,
    title: "Community",
    desc: "Built around real customer feedback, not just business metrics.",
  },
  {
    icon: <IoStarHalfOutline />,
    title: "Quality",
    desc: "We curate the best — no filler, no junk, just great products.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const About = () => {


  return (
    <div className="bg-[#F1EFE2]">
      {/* Intro */}
      <section className="relative overflow-hidden px-6 py-24 text-center md:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage: "radial-gradient(#172319 1px, transparent 1px)",
            backgroundSize: "22px 22px",
          }}
        />
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
          variants={container}
          className="relative mx-auto max-w-2xl"
        >
          <motion.div variants={fadeUp} className="relative mx-auto mb-6 h-16 w-16">
            <svg viewBox="0 0 64 64" className="absolute inset-0 h-full w-full animate-[spin_38s_linear_infinite] motion-reduce:animate-none">
              <circle cx="32" cy="32" r="29" fill="none" stroke="#D6A23C" strokeOpacity="0.4" strokeWidth="1.2" strokeDasharray="2 6" strokeLinecap="round" />
            </svg>  
            <div className="flex h-full w-full items-center justify-center rounded-full bg-[#172319] text-xl text-[#F1EFE2]">
              <FiShoppingBag />
            </div>
          </motion.div>

          <motion.h1 variants={fadeUp} className="font-['Fraunces'] text-4xl text-[#172319] sm:text-5xl">
            About <span className="italic text-[#4C6B45]">Buyzaar</span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-5 font-['Manrope'] text-lg text-[#172319]/70">
            Buyzaar is a next-generation e-commerce platform built to make online shopping fast, fair, and enjoyable — for everyone.
          </motion.p>
        </motion.div>
      </section>

      {/* Stats */}
      <section className="px-6 pb-20 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          className="mx-auto grid max-w-5xl grid-cols-2 gap-4 md:grid-cols-4 md:gap-6"
        >
          {stats.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="rounded-2xl border border-[#172319]/10 bg-[#FFFDF7] px-6 py-8 text-center shadow-[0_16px_30px_-22px_rgba(23,35,25,0.4)]"
            >
              <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#4C6B45]/10 text-lg text-[#4C6B45]">
                {item.icon}
              </div>
              <h2 className="font-['Fraunces'] text-2xl text-[#172319]">{item.title}</h2>
              <p className="mt-1 font-['Manrope'] text-sm text-[#172319]/60">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="bg-[#172319] px-6 py-24 md:px-16">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.4 }}
          variants={container}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.h1 variants={fadeUp} className="font-['Fraunces'] text-3xl italic text-[#F1EFE2] sm:text-4xl">
            Our Story
          </motion.h1>

          <motion.p variants={fadeUp} className="mt-6 font-['Manrope'] leading-relaxed text-[#F1EFE2]/70">
            Buyzaar started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually enjoyable?
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 font-['Manrope'] leading-relaxed text-[#F1EFE2]/70">
            Three years later, Buyzaar serves over 10,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.
          </motion.p>

          <motion.p variants={fadeUp} className="mt-5 font-['Manrope'] leading-relaxed text-[#F1EFE2]/70">
            We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.
          </motion.p>
        </motion.div>
      </section>

      {/* What We Stand For */}
      <section className="px-6 py-24 md:px-16">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="text-center font-['Fraunces'] text-3xl text-[#172319] sm:text-4xl"
        >
          What We Stand For
        </motion.h1>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
          className="mx-auto mt-14 grid max-w-5xl gap-5 sm:grid-cols-2"
        >
          {values.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex gap-4 rounded-2xl border border-[#172319]/10 bg-[#FFFDF7] p-6 shadow-[0_16px_30px_-22px_rgba(23,35,25,0.35)]"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#D6A23C]/15 text-lg text-[#D6A23C]">
                {item.icon}
              </div>
              <div>
                <h2 className="font-['Fraunces'] text-xl text-[#172319]">{item.title}</h2>
                <p className="mt-1 font-['Manrope'] text-sm leading-relaxed text-[#172319]/65">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>


         
         <div className=" mt-10"> 
          <CtaBlock />
         </div>
              

      </section>

      <Footer />

      {/* fonts — move into your document head in production */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,600;1,500&family=Manrope:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
    </div>
  );
};

export default About;