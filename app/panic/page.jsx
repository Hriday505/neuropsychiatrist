"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function PanicDisorderPage() {
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
            Panic Disorder
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Panic disorder is marked by sudden, repeated episodes of intense
            fear and physical symptoms. With the right care, it is treatable and
            manageable.
          </motion.p>
        </div>
      </section>

      {/* About Panic Disorder */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/img/panis.webp"
              alt="Panic Disorder"
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
              What is Panic Disorder?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Panic disorder is an anxiety condition where people experience
              sudden surges of intense fear, called{" "}
              <strong>panic attacks</strong>. These attacks often come without
              warning and may include heart palpitations, sweating, shortness of
              breath, and a sense of losing control. Repeated attacks may lead
              to avoiding certain situations or constant worry about when the
              next episode will occur.
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
              "Sudden intense fear or discomfort",
              "Rapid heartbeat and chest pain",
              "Shortness of breath or choking sensations",
              "Sweating, trembling, or shaking",
              "Feeling of losing control or going crazy",
              "Fear of dying during an attack",
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
              "Family history of anxiety or panic disorder",
              "High levels of chronic stress",
              "Changes in brain chemistry and function",
              "Traumatic life events",
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
            Treatment Options
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
            {[
              {
                title: "Cognitive Behavioural Therapy",
                desc: "Helps challenge and reframe fearful thoughts that trigger panic.",
              },
              {
                title: "Medication",
                desc: "Antidepressants or anti-anxiety medicines may be prescribed.",
              },
              {
                title: "Exposure Therapy",
                desc: "Gradual exposure to fear triggers helps reduce sensitivity.",
              },
              {
                title: "Lifestyle Adjustments",
                desc: "Regular exercise, healthy diet, and stress management reduce symptoms.",
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
          Break Free from Panic
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6">
          Panic disorder can be frightening, but effective treatment is
          available. Take the step towards calm and control today.
        </p>
        <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          Book Appointment
        </button>
      </section>

      <Footer />
    </>
  );
}
