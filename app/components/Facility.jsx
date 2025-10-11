"use client";
import React from "react";
import { motion } from "framer-motion";

const cardData = [
  {
    id: 1,
    title: "Neuro-Developmental",
    icon: "/img/icon1.png",
    description:
      "Comprehensive assessment and therapy for autism, ADHD, and learning challenges.",
  },
  {
    id: 2,
    title: "Psychiatric & Therapy",
    icon: "/img/icon2.png",
    description:
      "Diagnosis and treatment for depression, anxiety, OCD, and emotional disorders.",
  },
  {
    id: 3,
    title: "Counselling & Support",
    icon: "/img/icon3.png",
    description:
      "Personalized counselling to manage stress, relationships, and self-growth.",
  },
  {
    id: 4,
    title: "Rehabilitation Services",
    icon: "/img/icon4.png",
    description:
      "Speech, occupational, and behavioral therapies for holistic recovery.",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.35,
      delayChildren: 2.4,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 3.4,
      ease: [0.2, 0.85, 0.4, 1],
    },
  },
};

const Facility = () => {
  return (
    <section className="relative w-full lg:mt-24 min-h-[60vh] overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/img/neuro.png')` }}
      ></div>
      <div className="absolute inset-0 bg-teal-600 opacity-70"></div>

      {/* Animated Content */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.7 }}
        variants={containerVariants}
        className="relative z-10 text-white text-center px-4 max-w-[1200px] mx-auto py-12"
      >
        <motion.h1
          variants={cardVariant}
          className="text-[26px] sm:text-[32px] md:text-[36px] font-semibold leading-snug"
        >
          Expertises
        </motion.h1>

        <motion.p
          variants={cardVariant}
          className="text-sm sm:text-base pb-10 max-w-xl mx-auto opacity-90"
        >
          Comprehensive neuropsychiatric and rehabilitation services under one
          roof.
        </motion.p>

        {/* Cards */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {cardData.map((item) => (
            <motion.div key={item.id} variants={cardVariant}>
              <div className="bg-white text-black hover:bg-[#3EC8BD] hover:text-white transition-all duration-300 rounded-2xl p-6 flex flex-col items-center shadow-md">
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-[55px] h-[55px] mb-4 bg-[#3EC8BD] rounded-full p-2"
                  loading="lazy"
                />
                <h2 className="font-bold text-lg text-center">{item.title}</h2>
                <p className="text-[13px] text-center mt-2">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Facility;
