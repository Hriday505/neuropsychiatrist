"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.3, delayChildren: 0.4 },
  },
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
    <section className="w-full px-4 pt-24 pb-12 lg:pt-32 lg:pb-20 bg-white box-border overflow-x-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 items-center"
      >
        {/* Image */}
        <motion.div
          variants={slideRight}
          className="order-1 lg:order-2 md:col-span-1 lg:col-span-6 relative"
        >
          <Image
            src="/img/profile.png"
            alt="Doctor with patient"
            width={600}
            height={500}
            className="rounded-[40px]"
            priority
          />
        </motion.div>

        {/* Text */}
        <motion.div
          variants={slideLeft}
          className="order-2 lg:order-1 md:col-span-1 lg:col-span-6 text-center lg:text-left space-y-6"
        >
          <motion.h1
            variants={fadeUp}
            className="text-[28px] sm:text-[36px] md:text-[44px] lg:text-[54px] leading-tight font-bold"
          >
            Helping You Heal <br /> With Compassion
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="text-gray-600 text-[14px] sm:text-[15px] md:text-[16px] leading-relaxed font-semibold"
          >
            As a dedicated specialist, I provide one-on-one care to help you
            manage anxiety, depression, and emotional challenges — guiding you
            toward healing and balance in life.
          </motion.p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
