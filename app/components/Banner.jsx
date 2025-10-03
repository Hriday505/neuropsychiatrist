"use client";
import React from "react";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <div className="w-full px-4 mt-12">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 1.8,
              ease: "easeInOut",
              when: "beforeChildren",
              staggerChildren: 0.3,
            },
          },
        }}
        className="bg-[#00c6a9] rounded-[24px] w-full max-w-[1200px] mx-auto py-10 px-6 sm:px-10 md:px-16 lg:px-20 flex flex-col-reverse lg:flex-row items-center justify-between gap-6"
      >
        {/* Left Side Content */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: -40 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1.6, ease: "easeInOut" },
            },
          }}
          className="text-center lg:text-left w-full lg:w-1/2 flex flex-col items-center lg:items-start gap-5"
        >
          <h2 className="text-white text-[26px] sm:text-[32px] md:text-[38px] font-semibold leading-tight ibrand-font max-w-[90%] sm:max-w-full">
            Professional Care for Depression, Anxiety, OCD and More
          </h2>
          <p className="text-white opacity-90 text-sm sm:text-base max-w-[90%] sm:max-w-full">
            Get personalised treatment in a safe and supportive environment.
            Take the first step toward healing and peace of mind.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded-lg text-sm font-medium hover:scale-105 transition-all duration-300">
            Book Your Appointment
          </button>
        </motion.div>

        {/* Right Side Image */}
        <motion.div
          variants={{
            hidden: { opacity: 0, x: 50 },
            visible: {
              opacity: 1,
              x: 0,
              transition: { duration: 1.6, ease: "easeInOut" },
            },
          }}
          className="w-full lg:w-1/2 flex justify-center"
        >
          <img
            src="/img/doctor.png"
            alt="Doctor"
            className="max-h-[800px] w-auto object-contain"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Banner;
