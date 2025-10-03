"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

export default function FAQPage() {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "How do I know if I am suffering from depression?",
      answer:
        "Depression often presents as persistent sadness, loss of interest, fatigue, changes in sleep or appetite, and difficulty concentrating. If these symptoms last for more than two weeks, it is advisable to consult a psychiatrist.",
    },
    {
      question: "What is Generalised Anxiety Disorder (GAD)?",
      answer:
        "GAD is characterized by excessive worry about everyday situations, often accompanied by restlessness, irritability, and physical symptoms like palpitations or muscle tension. It is treatable with therapy, lifestyle changes, and sometimes medication.",
    },
    {
      question: "Can panic disorder be cured?",
      answer:
        "Panic disorder can be effectively managed with the right treatment, including psychotherapy (such as cognitive behavioral therapy) and medication if needed. Many patients experience significant relief and regain control of their lives.",
    },
    {
      question: "What is OCD and how is it treated?",
      answer:
        "Obsessive-Compulsive Disorder (OCD) involves unwanted, repetitive thoughts (obsessions) and repetitive behaviors (compulsions). Treatment includes therapy, medications, and support strategies to reduce symptoms and improve daily functioning.",
    },
    {
      question: "How is schizophrenia managed?",
      answer:
        "Schizophrenia is a long-term condition that affects thinking, emotions, and behavior. It is managed with a combination of medication, therapy, rehabilitation, and consistent follow-up to help patients live fulfilling lives.",
    },
    {
      question: "Do you provide treatment for Autism Spectrum Disorder?",
      answer:
        "Yes. We provide assessment and support for children and adults with Autism Spectrum Disorder, focusing on early intervention, behavioral therapy, and specialized rehabilitation services like speech and occupational therapy.",
    },
    {
      question: "Are online consultations available?",
      answer:
        "Yes, we offer secure and confidential online consultations for patients who cannot visit in person. This ensures continuity of care from the comfort of your home.",
    },
    {
      question: "Is my medical information confidential?",
      answer:
        "Absolutely. Patient confidentiality is a top priority. All records are securely stored, and no information is shared without your explicit consent, in line with medical ethics and Indian law.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Nav />
      <section className="w-full bg-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white py-20 px-6 text-center">
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-5xl font-bold mt-8"
          >
            Frequently Asked Questions
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Answers to common questions about mental health conditions and the
            treatments we provide.
          </motion.p>
        </div>

        {/* FAQ Section */}
        <div className="max-w-5xl mx-auto px-6 py-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.15 } },
            }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="bg-white shadow-lg rounded-2xl p-6 border-l-4 border-teal-500"
              >
                <button
                  className="flex justify-between items-center w-full text-left"
                  onClick={() => toggleFAQ(index)}
                >
                  <h2 className="text-lg md:text-xl font-semibold text-teal-600">
                    {faq.question}
                  </h2>
                  {activeIndex === index ? (
                    <ChevronUp className="text-teal-600" />
                  ) : (
                    <ChevronDown className="text-teal-600" />
                  )}
                </button>

                <AnimatePresence>
                  {activeIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4 }}
                      className="mt-3 text-gray-700 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
