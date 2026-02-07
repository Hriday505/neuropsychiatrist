"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.3, delayChildren: 0.4 } },
};
const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};
const slideLeft = {
  hidden: { opacity: 0, x: -80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
};
const slideRight = {
  hidden: { opacity: 0, x: 80 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.4, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <section className="w-full sm:h-[103vh]  px-4 pt-24 pb-12 lg:pt-32 lg:pb-20 bg-white dark:bg-gray-900 box-border overflow-x-hidden ">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] mx-auto grid grid-cols-1 xl:grid-cols-12 gap-8 items-center"
      >
        {/* Image + Blob shape behind (no image shadow) */}
        <motion.div
          variants={slideRight}
          className="order-1 sm:w-[80vw] xl:order-2 xl:col-span-6 relative"
        >
          {/* BLOB */}
          <svg
            aria-hidden
            className="absolute -right-20 -top-6 lg:right-146 lg:-top-2 w-[420px] h-[400px] lg:w-[520px] lg:h-[520px] z-0"
            viewBox="0 0 600 600"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              {/* tweak these colors to your palette */}
              <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#0a8694" />
                <stop offset="100%" stopColor="#0a8694" />
              </linearGradient>
              <filter id="soft" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" />
              </filter>
            </defs>
            <path
              d="M438.6,90.5C480.4,137.8,501.5,207.8,485.2,271.1C468.9,334.4,415.1,390.9,352.1,430.9C289.1,470.9,217,494.3,157.3,468.9C97.6,443.5,50.3,369.3,40.7,298.9C31.1,228.5,59.1,162,111.7,116.7C164.3,71.4,241.5,47.2,312.4,54.4C383.3,61.6,396.8,43.2,438.6,90.5Z"
              fill="url(#blobGrad)"
              filter="url(#soft)"
            />
          </svg>

          {/* optional dotted grid (remove if you don't want it) */}
          <svg
            aria-hidden
            className="absolute left-2 top-10 w-24 h-24 opacity-40 text-gray-300 z-0"
            viewBox="0 0 100 100"
            fill="currentColor"
          >
            <defs>
              <pattern
                id="dotGrid"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="2" cy="2" r="2" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#dotGrid)" />
          </svg>

          {/* IMAGE (no shadow) */}
          <Image
            src="/img/abirdas2.0.png"
            alt="Doctor with patient"
            width={830}
            height={600}
            className="relative    lg:-ml-16  -mb-3 z-10 rounded-[40px]" // no shadow/ring
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={slideLeft}
          className="order-2 z-50 xl:order-1 xl:col-span-6 text-center xl:text-left space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[54px] leading-tight font-bold text-gray-900 dark:text-white"
          >
            Helping You Heal <br /> With Compassion
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 dark:text-gray-300 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-semibold"
          >
            As a dedicated psychiatrist, I provide one-on-one care to help you
            manage anxiety, depression, and emotional challenges — guiding you
            toward healing and balance in life.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
