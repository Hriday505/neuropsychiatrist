"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { InlineWidget } from "react-calendly";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

export default function BookAppointment() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    date: "",
    time: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Appointment Data:", formData);
    alert("Your appointment request has been submitted!");
  };

  return (
    <>
      <Nav />
      <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
        {/* Hero Section */}
        <section className="text-center py-16 px-6">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl mt-8 font-bold text-teal-700"
          >
            Book an Appointment
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-lg text-gray-600"
          >
            Schedule a session with our expert Neuropsychiatrist today
          </motion.p>
        </section>

        {/* Calendly Embed */}
        <div className="flex justify-center py-10 px-4">
          <div className="w-full max-w-3xl bg-white shadow-xl rounded-xl p-6">
            <InlineWidget url="https://calendly.com/dhriday505/30min" />
          </div>
        </div>

        {/* Doctor Info Section */}
        {/* <section className="py-16 px-6 text-center bg-teal-50 mt-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold text-teal-700"
          >
            Meet Our Specialist
          </motion.h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At aperiam
            modi ea veritatis delectus magni minima recusandae molestiae,
          </p>
        </section> */}
      </div>
      <Footer />
    </>
  );
}
