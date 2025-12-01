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

export default function AnxietyPanicBlogPage() {
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
            Managing Anxiety &amp; Panic Attacks
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-4 text-sm md:text-lg max-w-2xl mx-auto"
          >
            Practical coping strategies and professional treatments that bring
            lasting relief.
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
                  Calm in the middle of chaos
                </p>
                <h2 className="text-lg md:text-2xl font-semibold">
                  Anxiety and panic can be managed with the right tools and
                  support.
                </h2>
              </div>
            </div>
            <div className="p-5 md:p-7 text-[13px] md:text-[15px] leading-relaxed text-gray-700">
              <p className="mb-3">
                Feeling anxious from time to time is a normal part of life. But
                when worry, fear, or sudden panic start to interfere with sleep,
                work, relationships, or daily routines, it may be a sign of an{" "}
                <strong>anxiety disorder</strong> or{" "}
                <strong>panic attacks</strong>.
              </p>
              <p>
                The encouraging truth is that anxiety and panic are{" "}
                <span className="font-semibold text-[#00c6a9]">
                  highly treatable
                </span>
                . With practical coping strategies, lifestyle changes, and
                professional treatment, most people can regain a sense of
                control and calm.
              </p>
            </div>
          </motion.section>

          {/* What it Feels Like */}
          <motion.section
            variants={fadeUp}
            className="bg-white rounded-xl p-5 md:p-7 shadow-sm border border-[#00c6a9]/8"
          >
            <h2 className="text-[18px] md:text-[20px] font-semibold ibrand-font text-gray-900 mb-3">
              What Do Anxiety and Panic Attacks Feel Like?
            </h2>
            <p className="text-[13px] md:text-[15px] text-gray-700 mb-4">
              Anxiety can show up as constant worry, nervousness, or a sense
              that something bad is about to happen. Panic attacks are sudden,
              intense episodes of fear that can feel overwhelming and
              frightening.
            </p>

            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h3 className="text-[15px] font-semibold text-[#00a693] mb-2">
                  Common Anxiety Symptoms
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-[12px] md:text-[13px] text-gray-700">
                  <li>Persistent worry or overthinking</li>
                  <li>Feeling “on edge” or unable to relax</li>
                  <li>Restlessness, irritability, or muscle tension</li>
                  <li>Difficulty concentrating or “blanking out”</li>
                  <li>Problems with falling or staying asleep</li>
                </ul>
              </div>

              <div>
                <h3 className="text-[15px] font-semibold text-[#00a693] mb-2">
                  Common Panic Attack Symptoms
                </h3>
                <ul className="list-disc pl-5 space-y-1.5 text-[12px] md:text-[13px] text-gray-700">
                  <li>Racing or pounding heartbeat</li>
                  <li>Shortness of breath or chest tightness</li>
                  <li>Sweating, trembling, or feeling faint</li>
                  <li>Feeling detached or “unreal”</li>
                  <li>Fear of losing control or “going crazy”</li>
                </ul>
              </div>
            </div>

            <p className="mt-4 text-[12px] md:text-[13px] text-gray-600">
              Panic attacks can be so intense that many people initially worry
              they are having a heart attack. A proper evaluation helps clarify
              the cause and guide the right treatment.
            </p>
          </motion.section>

          {/* Coping Strategies */}
          <motion.section
            variants={fadeUp}
            className="bg-white rounded-xl p-5 md:p-7 shadow-sm border border-[#3EC8BD]/10"
          >
            <h2 className="text-[18px] md:text-[20px] font-semibold ibrand-font text-gray-900 mb-3">
              Practical Coping Strategies You Can Start Using Today
            </h2>
            <p className="text-[13px] md:text-[15px] text-gray-700 mb-4">
              While professional treatment is very important, practical tools
              can help you manage anxiety and panic in the moment:
            </p>

            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-[#00c6a9]/5 rounded-lg p-4">
                <h3 className="text-[15px] font-semibold text-[#00a693] mb-1.5">
                  1. Slow Breathing
                </h3>
                <p className="text-[12px] md:text-[13px] text-gray-700">
                  During anxiety or panic, breathing becomes fast and shallow.
                  Try inhaling through your nose for 4 seconds, holding for 2,
                  then exhaling gently through your mouth for 6 seconds. Repeat
                  for a few minutes.
                </p>
              </div>

              <div className="bg-[#3EC8BD]/10 rounded-lg p-4">
                <h3 className="text-[15px] font-semibold text-[#00a693] mb-1.5">
                  2. Grounding Techniques
                </h3>
                <p className="text-[12px] md:text-[13px] text-gray-700">
                  Bring your mind back to the present: name 5 things you can
                  see, 4 you can touch, 3 you can hear, 2 you can smell, and 1
                  you can taste. This helps break the cycle of spiralling fear.
                </p>
              </div>

              <div className="bg-[#00c6a9]/5 rounded-lg p-4">
                <h3 className="text-[15px] font-semibold text-[#00a693] mb-1.5">
                  3. Lifestyle Support
                </h3>
                <p className="text-[12px] md:text-[13px] text-gray-700">
                  Regular sleep, gentle exercise, balanced meals, and reducing
                  caffeine or nicotine can lower overall anxiety levels. Even a
                  short daily walk helps.
                </p>
              </div>

              <div className="bg-[#3EC8BD]/10 rounded-lg p-4">
                <h3 className="text-[15px] font-semibold text-[#00a693] mb-1.5">
                  4. Challenging Anxious Thoughts
                </h3>
                <p className="text-[12px] md:text-[13px] text-gray-700">
                  Ask yourself: “What is the evidence for this fear?” and “What
                  is a more balanced way to see this situation?” Over time, this
                  weakens the power of catastrophic thinking.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Professional Treatment */}
          <motion.section
            variants={fadeUp}
            className="bg-white rounded-xl p-5 md:p-7 shadow-sm border border-[#00c6a9]/10"
          >
            <h2 className="text-[18px] md:text-[20px] font-semibold ibrand-font text-gray-900 mb-3">
              Professional Treatments That Bring Lasting Relief
            </h2>
            <p className="text-[13px] md:text-[15px] text-gray-700 mb-3">
              Anxiety disorders and panic attacks respond very well to
              evidence-based treatment. A mental health professional may
              recommend:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-[12px] md:text-[13px] text-gray-700 mb-3">
              <li>
                <span className="font-semibold text-[#00c6a9]">
                  Cognitive Behavioural Therapy (CBT)
                </span>{" "}
                to change unhelpful thought patterns and behaviours.
              </li>
              <li>
                <span className="font-semibold text-[#00c6a9]">
                  Exposure-based strategies
                </span>{" "}
                that gradually help you face feared situations safely.
              </li>
              <li>
                <span className="font-semibold text-[#00c6a9]">Medication</span>{" "}
                such as anti-anxiety or antidepressant medicines, when needed.
              </li>
              <li>
                <span className="font-semibold text-[#00c6a9]">
                  Relaxation and mindfulness
                </span>{" "}
                to calm the body and improve sleep.
              </li>
              <li>
                <span className="font-semibold text-[#00c6a9]">
                  Psychoeducation
                </span>{" "}
                to understand what anxiety and panic are doing in your brain and
                body.
              </li>
            </ul>
            <p className="text-[12px] md:text-[13px] text-gray-700">
              The goal is not to remove anxiety completely, but to bring it down
              to a manageable level so you can live more freely and confidently.
            </p>
          </motion.section>

          {/* CTA */}
          <motion.section
            variants={fadeUp}
            className="bg-gradient-to-r from-[#00c6a9] to-[#3EC8BD] rounded-2xl p-5 md:p-7 text-white shadow-md"
          >
            <h2 className="text-[18px] md:text-[20px] font-semibold ibrand-font mb-2">
              You’re not “overreacting” — your feelings are valid.
            </h2>
            <p className="text-[12px] md:text-[13px] text-white/90 mb-4 max-w-2xl">
              If anxiety or panic attacks are affecting your daily life, seeking
              help is not a sign of weakness. With the right guidance, you can
              understand your body’s signals and respond to them with calm and
              confidence.
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
