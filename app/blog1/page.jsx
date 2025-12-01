"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

export default function DepressionBlogPage() {
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
            className="text-3xl md:text-5xl font-bold ibrand-font"
          >
            Understanding Depression
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm md:text-lg max-w-2xl mx-auto"
          >
            Learn about its symptoms, causes, and how timely treatment can help
            restore quality of life.
          </motion.p>
        </div>
      </section>

      {/* Blog Content */}
      <main className="bg-[#f9f9f9] py-12 md:py-16">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          className="max-w-[1900px] mx-auto px-4 space-y-8 md:space-y-10"
        >
          {/* Intro Card */}
          <motion.section
            variants={fadeUp}
            className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(62,200,189,0.18)] overflow-hidden"
          >
            <div className="h-36 md:h-44 bg-gradient-to-r from-[#00c6a9] to-[#3EC8BD] relative">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_top,_white,_transparent_60%)]" />
              <div className="absolute bottom-4 left-4 md:bottom-6 md:left-6 text-white">
                <p className="text-[10px] md:text-xs uppercase tracking-[0.18em] mb-1">
                  Emotional Wellbeing
                </p>
                <h2 className="text-lg md:text-2xl font-semibold">
                  Depression is treatable. Help is available.
                </h2>
              </div>
            </div>
            <div className="p-5 md:p-7 text-[13px] md:text-[15px] leading-relaxed text-gray-700">
              <p className="mb-3">
                Depression is more than just “feeling sad” for a few days. It is
                a medical condition that affects how a person thinks, feels, and
                behaves. It can interfere with sleep, appetite, energy, work,
                studies, and relationships.
              </p>
              <p>
                The good news is that depression is{" "}
                <span className="font-semibold text-[#00c6a9]">
                  highly treatable
                </span>
                . With the right support, most people can recover and regain a
                meaningful, fulfilling life.
              </p>
            </div>
          </motion.section>

          {/* Symptoms */}
          <motion.section
            variants={fadeUp}
            className="bg-white rounded-xl p-5 md:p-7 shadow-sm border border-[#00c6a9]/8"
          >
            <h2 className="text-[18px] md:text-[20px] font-semibold ibrand-font text-gray-900 mb-3">
              Common Symptoms of Depression
            </h2>
            <p className="text-[13px] md:text-[15px] text-gray-700 mb-4">
              Symptoms can look different from person to person, but common
              signs of depression include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[12px] md:text-[13px] text-gray-700">
              <li>Persistent sadness, emptiness, or low mood</li>
              <li>Loss of interest in activities once enjoyed</li>
              <li>Changes in sleep — sleeping too much or too little</li>
              <li>Changes in appetite or weight</li>
              <li>Feeling tired or lacking energy most of the day</li>
              <li>Difficulty concentrating or making decisions</li>
              <li>Feelings of worthlessness, guilt, or hopelessness</li>
              <li>Being easily irritated or withdrawn</li>
              <li>
                Thoughts like “life is not worth living” — this needs{" "}
                <strong>immediate professional help</strong>
              </li>
            </ul>
          </motion.section>

          {/* Causes */}
          <motion.section
            variants={fadeUp}
            className="bg-white rounded-xl p-5 md:p-7 shadow-sm border border-[#3EC8BD]/10"
          >
            <h2 className="text-[18px] md:text-[20px] font-semibold ibrand-font text-gray-900 mb-3">
              What Causes Depression?
            </h2>
            <p className="text-[13px] md:text-[15px] text-gray-700 mb-4">
              Depression usually develops from a combination of biological,
              psychological, and social factors:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#00c6a9]/5 rounded-lg p-4">
                <h3 className="text-[15px] font-semibold text-[#00a693] mb-1.5">
                  Biological Factors
                </h3>
                <p className="text-[12px] md:text-[13px] text-gray-700">
                  Imbalances in brain chemicals (neurotransmitters), hormonal
                  shifts, and genetic vulnerability can all contribute to
                  depression.
                </p>
              </div>
              <div className="bg-[#3EC8BD]/10 rounded-lg p-4">
                <h3 className="text-[15px] font-semibold text-[#00a693] mb-1.5">
                  Psychological &amp; Emotional Factors
                </h3>
                <p className="text-[12px] md:text-[13px] text-gray-700">
                  Long-term stress, low self-esteem, negative thinking patterns,
                  or history of trauma can increase the risk.
                </p>
              </div>
              <div className="bg-[#00c6a9]/5 rounded-lg p-4">
                <h3 className="text-[15px] font-semibold text-[#00a693] mb-1.5">
                  Life Events
                </h3>
                <p className="text-[12px] md:text-[13px] text-gray-700">
                  Loss of a loved one, relationship difficulties, academic or
                  work pressure, financial problems, or major changes can
                  trigger depressive episodes.
                </p>
              </div>
              <div className="bg-[#3EC8BD]/10 rounded-lg p-4">
                <h3 className="text-[15px] font-semibold text-[#00a693] mb-1.5">
                  Physical Health
                </h3>
                <p className="text-[12px] md:text-[13px] text-gray-700">
                  Chronic medical conditions, certain medications, substance
                  use, and poor sleep can also play a role in depression.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Why Early Treatment Matters */}
          <motion.section
            variants={fadeUp}
            className="bg-white rounded-xl p-5 md:p-7 shadow-sm border border-[#00c6a9]/10"
          >
            <h2 className="text-[18px] md:text-[20px] font-semibold ibrand-font text-gray-900 mb-3">
              Why Timely Treatment Is So Important
            </h2>
            <p className="text-[13px] md:text-[15px] text-gray-700 mb-3">
              Depression is not a sign of weakness or a character flaw. It is a
              health condition — and like any other condition, early help makes
              a real difference:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[12px] md:text-[13px] text-gray-700 mb-3">
              <li>Reduces the severity and duration of episodes</li>
              <li>
                Lowers the risk of complications, such as self-harm or substance
                misuse
              </li>
              <li>Improves work, studies, family life, and relationships</li>
              <li>
                Helps build coping skills that protect against future relapses
              </li>
            </ul>
            <p className="text-[12px] md:text-[13px] text-gray-700">
              Treatment may include{" "}
              <span className="font-semibold text-[#00c6a9]">
                psychotherapy (talk therapy)
              </span>
              , <span className="font-semibold text-[#00c6a9]">medication</span>
              , or a combination of both, along with lifestyle changes like
              regular routine, movement, and social support.
            </p>
          </motion.section>

          {/* CTA */}
          <motion.section
            variants={fadeUp}
            className="bg-gradient-to-r from-[#00c6a9] to-[#3EC8BD] rounded-2xl p-5 md:p-7 text-white shadow-md"
          >
            <h2 className="text-[18px] md:text-[20px] font-semibold ibrand-font mb-2">
              You don’t have to go through this alone.
            </h2>
            <p className="text-[12px] md:text-[13px] text-white/90 mb-4 max-w-2xl">
              If you recognise these signs in yourself or someone you care
              about, reaching out for help is a strong and courageous step. A
              professional evaluation can clarify what you are experiencing and
              guide you towards the right support.
            </p>
            <button className="inline-flex justify-center items-center px-5 py-2.5 rounded-lg bg-white text-[#00a693] text-[12px] md:text-[13px] font-semibold shadow-sm hover:bg-[#f0fffd] transition">
              Book an Appointment
            </button>
          </motion.section>
        </motion.div>
      </main>

      <Footer />
    </>
  );
}
