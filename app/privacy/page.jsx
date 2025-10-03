"use client";
import React from "react";
import { motion } from "framer-motion";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicy() {
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
            Privacy Policy
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            This Privacy Policy explains how we collect, use, and safeguard your
            personal information in accordance with Indian laws, including the
            Information Technology Act, 2000 and its applicable rules.
          </motion.p>
        </div>

        {/* Content Section */}
        <div className="max-w-6xl mx-auto px-6 py-12 space-y-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } },
            }}
          >
            {[
              {
                title: "1. Information We Collect",
                content:
                  "We may collect personal details such as your name, contact number, email address, and limited medical history when you voluntarily provide them during consultations, appointment bookings, or through our website forms. Sensitive Personal Data, including medical information, is handled with strict confidentiality.",
              },
              {
                title: "2. Purpose of Data Collection",
                content:
                  "Your information is collected and processed solely for providing psychiatric consultations, treatment, follow-ups, record-keeping, and administrative purposes. We do not sell or share your data with unauthorized third parties.",
              },
              {
                title: "3. Legal Compliance",
                content:
                  "This policy complies with the Information Technology Act, 2000, and the Information Technology (Reasonable Security Practices and Procedures and Sensitive Personal Data or Information) Rules, 2011. All handling of medical data also respects patient confidentiality as per medical ethics in India.",
              },
              {
                title: "4. Data Protection",
                content:
                  "We employ industry-standard technical and organizational measures to safeguard your data against unauthorized access, alteration, disclosure, or destruction. Patient records are stored securely with restricted access.",
              },
              {
                title: "5. Patient Confidentiality",
                content:
                  "All consultations, whether online or offline, are confidential. We will not disclose your medical details to any third party without your explicit consent, except when required by law or medical emergencies.",
              },
              {
                title: "6. Cookies & Analytics",
                content:
                  "Our website may use cookies to improve user experience and gather non-identifiable analytics data. You may choose to disable cookies in your browser settings, though some features may not function properly.",
              },
              {
                title: "7. Your Rights",
                content:
                  "You have the right to access, correct, or request deletion of your personal data. You may also withdraw consent for data processing at any time by contacting us. However, medical record retention may be required under applicable laws.",
              },
              {
                title: "8. Data Retention",
                content:
                  "We retain your personal and medical data only as long as necessary to provide treatment and comply with Indian medical and legal obligations.",
              },
              {
                title: "9. Contact Us",
                content:
                  "For any concerns regarding this Privacy Policy or to exercise your rights under Indian law, please reach out via our Contact Page, email at drneuro@example.com, or call us at +91 98765 43210.",
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
                className="bg-white shadow-lg rounded-2xl mt-6 p-6 md:p-8 border-l-4 border-teal-500"
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
