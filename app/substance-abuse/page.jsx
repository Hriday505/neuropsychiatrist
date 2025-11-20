"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function SubstanceAbusePage() {
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
            Substance Abuse & Addiction
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Substance abuse is a treatable condition. With comprehensive care,
            evidence-based treatment, and ongoing support, recovery is possible
            and sustainable.
          </motion.p>
        </div>
      </section>

      {/* About Substance Abuse */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-2 gap-12 px-4 items-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Image
              src="/img/abuse.jpeg"
              alt="Substance Abuse"
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
              What is Substance Abuse?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Substance abuse refers to the harmful or hazardous use of
              psychoactive substances, including alcohol and drugs. It can lead
              to addiction, a chronic disease that affects brain function and
              behavior. Substance use disorders are medical conditions that
              require professional treatment and ongoing support.
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
              "Inability to control substance use",
              "Neglecting responsibilities and relationships",
              "Physical and psychological withdrawal symptoms",
              "Tolerance requiring increased amounts",
              "Continued use despite negative consequences",
              "Loss of interest in previously enjoyed activities",
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
              "Genetic predisposition and family history",
              "Mental health conditions and trauma",
              "Environmental and social factors",
              "Early exposure and peer pressure",
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
                title: "Detoxification",
                desc: "Medically supervised withdrawal management and stabilization.",
              },
              {
                title: "Behavioral Therapy",
                desc: "Cognitive-behavioral therapy and motivational interviewing.",
              },
              {
                title: "Medication-Assisted Treatment",
                desc: "FDA-approved medications to support recovery and prevent relapse.",
              },
              {
                title: "Support Groups",
                desc: "Peer support, 12-step programs, and ongoing recovery communities.",
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
          Begin Your Recovery Journey Today
        </motion.h2>
        <p className="max-w-2xl mx-auto mb-6">
          Recovery is possible with the right support and treatment. Take the
          first step toward a healthier, substance-free life by reaching out for
          professional help.
        </p>
        <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
          Book Appointment
        </button>
      </section>

      <Footer />
    </>
  );
}
