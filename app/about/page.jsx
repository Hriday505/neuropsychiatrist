"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link"; // ✅ import Link
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: "easeOut" },
  }),
};

export default function About() {
  const treatments = [
    { name: "Depression", href: "/depression" },
    {
      name: "Generalised Anxiety ",
      href: "/generalised",
    },
    { name: "Panic Disorder", href: "/panic" },
    { name: "OCD", href: "/ocd" },
    { name: "Schizophrenia", href: "/schizo" },
    { name: "Autism Spectrum Disorder", href: "/autism" },
  ];

  return (
    <>
      <Navbar />

      <div className="w-full">
        {/* Hero Section */}
        <section className="pt-28 pb-16 bg-gradient-to-r from-[#3EC8BD] to-[#1FA7A0] text-white text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About the Doctor
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0.2}
            className="max-w-3xl mx-auto text-lg leading-relaxed pl-4 pr-4"
          >
            Compassionate and professional psychiatric care backed by years of
            clinical expertise, dedicated to improving the mental health and
            quality of life of patients in Kolkata, Howrah, and North 24
            Parganas.
          </motion.p>
        </section>

        {/* Doctor's Journey */}
        <section className="py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1"
          >
            <Image
              src="/img/abirdas.jpg"
              alt="Doctor"
              width={600}
              height={400}
              className="rounded-2xl shadow-lg object-cover w-[400px] h-[400px]"
            />
          </motion.div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex-1 text-center lg:text-left"
          >
            <h2 className="text-3xl font-bold text-teal-600 mb-4">
              Professional Journey
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Completed <strong>MBBS (2006 batch)</strong> from{" "}
              <strong>North Bengal Medical College</strong>, graduating in 2012.
              After house staffship, pursued post-graduation in Psychiatry at{" "}
              <strong>Calcutta National Medical College (CNMC)</strong>, and
              successfully completed <strong>MD Psychiatry in 2018</strong>.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mt-4">
              Currently attached with <strong>ESI Hospital, Kamarhati</strong>,
              where he continues to provide specialised psychiatric care
              alongside private practice.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed mb-4">
              Following MD, worked as a Senior Resident in{" "}
              <strong>NRS Medical College & Hospital</strong> and{" "}
              <strong>Uluberia Superspeciality Hospital</strong>. Alongside,
              began private practice from 2018, serving patients in Kolkata,
              Howrah, and parts of North 24 Parganas.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              Qualifications: <strong>MBBS, MD (Psychiatry), CCMSD</strong>
            </p>
          </motion.div>
        </section>

        {/* Treatments */}
        <section className="py-16 bg-gray-50 px-6 lg:px-20 text-center">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-teal-600 mb-10"
          >
            Conditions Treated
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600 mb-8"
          >
            Providing comprehensive and personalised treatment plans for a wide
            range of psychiatric and psychological conditions:
          </motion.p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {treatments.map((treatment, idx) => (
              <Link key={idx} href={treatment.href}>
                <motion.div
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="bg-white shadow rounded-xl p-6 hover:shadow-lg hover:bg-[#3EC8BD] hover:text-white transition cursor-pointer"
                >
                  <p className="font-semibold">{treatment.name}</p>
                </motion.div>
              </Link>
            ))}
          </div>
        </section>

        {/* Why Choose */}
        <section className="py-16 bg-teal-600 text-white text-center px-6 lg:px-20">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold mb-10"
          >
            Why Choose This Clinic
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              "Evidence-based psychiatric treatments",
              "Personalised one-on-one care",
              "Extensive clinical experience in hospitals & private practice",
              "Friendly, compassionate approach",
              "Accessible services in Kolkata, Howrah, and North 24 Parganas",
            ].map((reason, idx) => (
              <motion.div
                key={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6"
              >
                <p className="font-medium">{reason}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 text-center bg-gray-50 px-6">
          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-3xl font-bold text-gray-800"
          >
            Take the First Step Toward Better Mental Health
          </motion.h2>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-gray-600 mt-4 max-w-2xl mx-auto"
          >
            Reach out today for an appointment and begin your journey toward
            recovery and well-being.
          </motion.p>
          <motion.button
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6 bg-teal-600 text-white px-8 py-3 rounded-full hover:bg-teal-700 transition"
          >
            <Link href="/appointment">Book Appointment</Link>
          </motion.button>
        </section>
      </div>

      <Footer />
    </>
  );
}
