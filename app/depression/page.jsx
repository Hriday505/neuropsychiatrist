"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function DepressionPage() {
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
            Understanding Depression
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Depression is more than sadness — it affects thoughts, emotions,
            relationships, and physical health. But with timely support, it can
            be effectively treated.
          </motion.p>
        </div>
      </section>

      {/* About Depression */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/img/depressed.jpeg"
              alt="Depression"
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
              What is Depression?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Depression is a common mental health condition that causes
              persistent low mood, loss of interest in activities, and emotional
              as well as physical problems. It can interfere with daily life,
              work, and relationships but is treatable with professional help.
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
              "Persistent sadness or emptiness",
              "Loss of interest in hobbies & activities",
              "Changes in appetite or sleep patterns",
              "Low energy or constant fatigue",
              "Difficulty concentrating or making decisions",
              "Feelings of guilt, hopelessness, or worthlessness",
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
              "Genetic predisposition",
              "Brain chemistry imbalance",
              "Stressful life events or trauma",
              "Chronic illness & hormonal changes",
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
                title: "Psychotherapy",
                desc: "Counselling or CBT to identify and change negative thinking patterns.",
              },
              {
                title: "Medication",
                desc: "Antidepressants prescribed to balance brain chemicals.",
              },
              {
                title: "Lifestyle Changes",
                desc: "Exercise, healthy diet, proper sleep, and stress management.",
              },
              {
                title: "Support Systems",
                desc: "Family, friends, and support groups play a vital role.",
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
          Take the First Step Toward Recovery
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6">
          Depression is treatable. Reach out today to book a consultation and
          begin your journey to healing.
        </p>
        <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          Book Appointment
        </button>
      </section>

      <Footer />
    </>
  );
}
