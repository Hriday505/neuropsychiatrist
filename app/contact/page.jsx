"use client";

import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { Mail, Phone, MapPin } from "lucide-react"; // icons

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_a112h3d", // 🔹 your service ID
        "template_rs8ntna", // 🔹 your template ID
        {
          title: formData.subject,
          name: formData.user_name,
          user_name: formData.user_name,
          user_email: formData.user_email,
          email: formData.user_email,
          message: formData.message,
        },
        "6cCkyJBOGxF3vjFpg" // 🔹 your public key
      )
      .then(
        (result) => {
          toast.success("✅ Message sent successfully!");
          setFormData({
            user_name: "",
            user_email: "",
            subject: "",
            message: "",
          });
          setLoading(false);
        },
        (error) => {
          toast.error("❌ Failed to send message. Try again.");
          console.error("Error:", error.text);
          setLoading(false);
        }
      );
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" />

      {/* Hero Section */}
      <section className="pt-28 pb-16 bg-gradient-to-r from-[#3EC8BD] to-[#1FA7A0] text-white">
        <div className="max-w-[1200px] mx-auto px-4 text-center">
          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="text-4xl md:text-5xl font-bold"
          >
           1:1 online consultancy
          </motion.h1>
          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            className="mt-4 text-lg md:text-xl max-w-2xl mx-auto"
          >
            Book an appointment, ask a question, or find the nearest chamber.
          </motion.p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 bg-white">
        <div className="max-w-[1200px] mx-auto px-4 grid md:grid-cols-2 gap-12 items-start">
          {/* Info */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-6">
              Reach out if you need support with{" "}
              <strong>
                depression, anxiety, OCD, schizophrenia, panic disorder
              </strong>
              , or <strong>autism spectrum conditions</strong>. We’re here to
              help you.
            </p>

            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#1FA7A0]" />
                Private Practice — Kolkata, Howrah & North 24 Parganas
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5 text-[#1FA7A0]" />
                drneuro@example.com
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5 text-[#1FA7A0]" />
                +918906462824
              </p>
            </div>

            {/* Google Map Embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3683.882842898231!2d88.308403!3d22.572646!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDM0JzIxLjUiTiA4OMKwMTgnMjUuMiJF!5e0!3m2!1sen!2sin!4v1679999999999"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="bg-[#F5FAFA] p-8 rounded-xl shadow-lg"
          >
            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                value={formData.user_name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3EC8BD]"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                value={formData.user_email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3EC8BD]"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3EC8BD]"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 text-sm font-semibold text-gray-700">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-[#3EC8BD]"
              ></textarea>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              type="submit"
              disabled={loading}
              className="w-full bg-[#1FA7A0] text-white font-semibold py-3 rounded-lg transition duration-300 hover:bg-[#188C87] disabled:opacity-70"
            >
              {loading ? "Sending..." : "Send Message"}
            </motion.button>
          </motion.form>
        </div>
      </section>

      <Footer />
    </>
  );
}
