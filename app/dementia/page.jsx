"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function DementiaPage() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-[#3EC8BD] to-[#1FA7A0] text-white">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold"
          >
            Understanding Dementia
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Dementia affects memory, thinking, and daily functioning. While
            there's no cure, early diagnosis and comprehensive care can help
            manage symptoms and improve quality of life.
          </motion.p>
        </div>
      </section>

      {/* About Dementia */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/img/dementia.webp"
              alt="Dementia"
              width={600}
              height={400}
              className="rounded-xl shadow-lg object-cover w-full h-auto"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-teal-600 mb-4">
              What is Dementia?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Dementia is an umbrella term for conditions characterized by
              cognitive decline that interferes with daily life. Alzheimer's
              disease is the most common type, but there are several forms of
              dementia. It affects memory, thinking, orientation, comprehension,
              calculation, learning capacity, language, and judgment.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Symptoms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-teal-600 mb-10"
          >
            Signs & Symptoms
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Memory loss affecting daily activities",
              "Difficulty with familiar tasks",
              "Problems with language and communication",
              "Disorientation to time and place",
              "Poor or decreased judgment",
              "Changes in mood and personality",
            ].map((symptom, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="text-gray-700">{symptom}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Causes */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-teal-600 mb-8"
          >
            Causes & Risk Factors
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Age and genetic factors",
              "Brain changes and protein deposits",
              "Cardiovascular disease and diabetes",
              "Head injuries and lifestyle factors",
            ].map((cause, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-xl shadow text-gray-700"
              >
                {cause}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Treatment Options */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-teal-600 mb-8"
          >
            Management & Support Options
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                title: "Medication",
                desc: "Drugs to slow progression and manage symptoms of dementia.",
              },
              {
                title: "Cognitive Stimulation",
                desc: "Activities and therapies to maintain mental function and engagement.",
              },
              {
                title: "Behavioral Interventions",
                desc: "Strategies to manage behavioral and psychological symptoms.",
              },
              {
                title: "Family Support",
                desc: "Education, counseling, and resources for caregivers and families.",
              },
            ].map((t, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-teal-600 mb-2">
                  {t.title}
                </h3>
                <p className="text-gray-600 text-sm">{t.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-teal-600 text-white text-center pl-6 pr-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Early Assessment Makes a Difference
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6">
          If you're concerned about memory changes or cognitive decline, early
          evaluation can help determine the cause and develop an appropriate
          care plan.
        </p>
        <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          Book Appointment
        </button>
      </section>

      <Footer />
    </>
  );
}
