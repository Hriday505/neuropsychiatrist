"use client";

import React from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// container for stagger effect
const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }, // 👈 delay between each card
  },
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-[#3EC8BD] to-[#1FA7A0] text-white text-center">
        <motion.h1
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl md:text-5xl font-bold"
        >
          Our Services
        </motion.h1>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          transition={{ delay: 0.2 }}
          className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
        >
          Comprehensive neuropsychiatric care designed to improve mental health
          and neurological well-being.
        </motion.p>
      </section>

      {/* Specialties Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            animate="visible" // 👈 animate immediately
            className="text-3xl font-bold text-gray-800 text-center mb-12"
          >
            Areas of Expertise
          </motion.h2>

          {/* grid with staggered animation */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible" // 👈 animate immediately
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              "Lorem ipsum 1",
              "Lorem ipsum 2",
              "Lorem ipsum 3",
              "Lorem ipsum 4",
              "Lorem ipsum 5",
              "Lorem ipsum 6",
            ].map((service, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                className="bg-[#F5FAFA] p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <Image
                  src={`/img/images.jpg`}
                  alt={service}
                  width={400}
                  height={250}
                  className="rounded-lg mb-4 object-cover w-full h-48"
                />
                <h3 className="text-xl font-semibold text-[#1FA7A0] mb-2">
                  {service}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam erat volutpat. Vivamus venenatis.
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Detailed Services */}
      <section className="py-16 bg-[#F5FAFA]">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/img/images.jpg"
              alt="Neuropsychiatric Care"
              width={600}
              height={400}
              className="rounded-lg shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Personalized Treatment Plans
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              vehicula, felis ac pretium bibendum, purus dolor feugiat libero,
              at laoreet arcu neque sit amet turpis.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Comprehensive mental health evaluation</li>
              <li>Neurological assessment and diagnosis</li>
              <li>Medication management and psychotherapy</li>
              <li>Brain health optimization</li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-[#3EC8BD] to-[#1FA7A0] text-white text-center">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-4"
        >
          Take the First Step Toward Better Mental Health
        </motion.h2>
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-8 max-w-2xl mx-auto"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Start your
          journey toward improved brain and mental health today.
        </motion.p>
        <motion.a
          href="/contact"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block bg-white text-[#1FA7A0] px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-100 transition"
        >
          Book an Appointment
        </motion.a>
      </section>

      <Footer />
    </>
  );
}
