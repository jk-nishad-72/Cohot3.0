import React from "react";
import { motion } from "motion/react";
import { FiShoppingBag } from "react-icons/fi";
import { useNavigate } from "react-router";

/**
 * Design notes
 * ------------
 * A closing CTA, so it plays a different note than the intro badge: same
 * seed-ring + icon-circle language, but on the ink background (bookending
 * the "Our Story" section) with a gold ring instead of moss, so it reads as
 * "one more thing" rather than a repeat of the top of the page.
 */

const CtaBlock = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden bg-[#172319] px-4 py-20 text-center">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#F1EFE2 1px, transparent 1px)",
          backgroundSize: "22px 22px",
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="relative mx-auto flex max-w-md flex-col items-center"
      >
        <div className="relative mb-6 h-16 w-16">
          <svg
            viewBox="0 0 64 64"
            className="absolute inset-0 h-full w-full animate-[spin_38s_linear_infinite] motion-reduce:animate-none"
          >
            <circle
              cx="32"
              cy="32"
              r="29"
              fill="none"
              stroke="#D6A23C"
              strokeOpacity="0.5"
              strokeWidth="1.2"
              strokeDasharray="2 6"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex h-full w-full items-center justify-center rounded-full bg-[#F1EFE2]/10 text-[#F1EFE2]">
            <FiShoppingBag size={22} />
          </div>
        </div>

        <p className="font-['Fraunces'] text-2xl italic text-[#F1EFE2]">Ready to shop?</p>
        <p className="mt-2 font-['Manrope'] text-sm text-[#F1EFE2]/60">
          Explore thousands of products at unbeatable prices.
        </p>

        <button
          onClick={() => navigate("/shop")}
          className="mt-7 rounded-full bg-[#D6A23C] px-7 py-3 font-['Manrope'] text-sm font-medium text-[#172319] transition-colors hover:bg-[#F1EFE2]"
        >
          Explore Products
        </button>
      </motion.div>
    </section>
  );
};

export default CtaBlock;