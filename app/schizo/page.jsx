"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function SchizophreniaPage() {
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
            Schizophrenia
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Schizophrenia is a serious mental health condition that affects how
            a person thinks, feels, and behaves. With early treatment and
            support, many people can manage symptoms and lead fulfilling lives.
          </motion.p>
        </div>
      </section>
      {/* About */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/img/schizophrenia.jpg"
              alt="Schizophrenia"
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
              What is Schizophrenia?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Schizophrenia is a long-term mental disorder that impacts a
              person’s ability to interpret reality. It may cause{" "}
              <strong>hallucinations, delusions, disorganized thinking,</strong>{" "}
              and changes in behavior. Despite misconceptions, it is treatable,
              and many people improve significantly with medical and
              psychological care.
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
            Common Symptoms
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {[
              "Hallucinations (seeing or hearing things not present)",
              "Delusions (strong beliefs not based in reality)",
              "Disorganized speech or thought process",
              "Social withdrawal and reduced emotions",
              "Difficulty concentrating and memory issues",
              "Neglect of personal hygiene and daily tasks",
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
              "Genetic predisposition (family history of schizophrenia)",
              "Imbalances in brain chemicals such as dopamine",
              "Complications during pregnancy or birth",
              "High stress levels or drug misuse in vulnerable individuals",
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
      {/* Treatments */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-teal-600 mb-8"
          >
            Treatment Options
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                title: "Medication",
                desc: "Antipsychotic medicines are the cornerstone of treatment and help manage symptoms.",
              },
              {
                title: "Psychotherapy",
                desc: "Cognitive behavioral therapy and supportive counselling improve coping skills.",
              },
              {
                title: "Rehabilitation",
                desc: "Social skills training and occupational therapy aid recovery and independence.",
              },
              {
                title: "Family Education",
                desc: "Involving family members helps create a supportive environment for patients.",
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
      ={/* CTA */}
      <section className="py-16 bg-teal-600 text-white text-center pl-6 pr-6">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl font-bold mb-6"
        >
          Take the First Step Toward Recovery
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6">
          Schizophrenia is a manageable condition with the right care. Early
          diagnosis and ongoing treatment can help individuals live healthier,
          more fulfilling lives.
        </p>
        <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          Book Appointment
        </button>
      </section>
      <Footer />
    </>
  );
}
