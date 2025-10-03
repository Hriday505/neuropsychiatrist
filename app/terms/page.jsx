"use client";
import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

export default function TermsConditions() {
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
            className="text-4xl md:text-5xl mt-8 font-bold"
          >
            Terms & Conditions
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Please read these Terms & Conditions carefully before using our
            psychiatric consultation and treatment services.
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {
                transition: { staggerChildren: 0.2 },
              },
            }}
          >
            {[
              {
                title: "1. Acceptance of Terms",
                content:
                  "By booking an appointment, accessing our website, or availing our psychiatric services, you agree to comply with these Terms & Conditions. If you do not agree, you may not use our services.",
              },
              {
                title: "2. Medical Disclaimer",
                content:
                  "Our consultations, whether online or in person, are intended for professional psychiatric care and advice. They do not replace emergency medical services. In urgent or life-threatening situations, please call emergency helplines immediately.",
              },
              {
                title: "3. Appointments & Cancellations",
                content:
                  "Appointments must be scheduled in advance. Cancellations should be made at least 24 hours prior to the scheduled appointment. Late cancellations or no-shows may be subject to fees.",
              },
              {
                title: "4. Patient Responsibilities",
                content:
                  "Patients must provide complete and accurate medical history and personal details. Any misinformation may impact diagnosis and treatment outcomes, for which we are not responsible.",
              },
              {
                title: "5. Confidentiality",
                content:
                  "All medical records, case histories, and consultation details are maintained in strict confidentiality in line with Indian medical ethics and the Information Technology Act, 2000. Records will not be disclosed without patient consent unless required by law.",
              },
              {
                title: "6. Payment Terms",
                content:
                  "Consultation and treatment fees must be paid as per the clinic’s current pricing policy. We reserve the right to revise fees at any time. Online payment, if applicable, will be processed via secure channels.",
              },
              {
                title: "7. Limitation of Liability",
                content:
                  "While we strive to provide evidence-based psychiatric care, outcomes may vary from patient to patient. We are not liable for indirect damages, treatment delays, or circumstances beyond our control.",
              },
              {
                title: "8. Use of Website",
                content:
                  "The information provided on this website is for educational purposes only and does not substitute professional diagnosis. Unauthorized use of website content, images, or resources is prohibited.",
              },
              {
                title: "9. Governing Law & Jurisdiction",
                content:
                  "These Terms & Conditions are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts of Kolkata, West Bengal.",
              },
              {
                title: "10. Amendments",
                content:
                  "We may update these Terms & Conditions at any time. Continued use of our services after changes will be deemed as acceptance of the revised terms.",
              },
            ].map((section, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.6 },
                  },
                }}
                className="bg-white shadow-lg rounded-2xl p-6 md:p-8 border-l-4 mt-6 border-teal-500"
              >
                <h2 className="text-2xl font-semibold text-teal-600 mb-4">
                  {section.title}
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  {section.content}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <Footer />
    </>
  );
}
