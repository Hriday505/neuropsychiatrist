"use client"; // 👈 MUST be the first line

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Facility from "./components/Facility";
import Servicelist from "./components/Serviceslist";
import Blogs from "./components/Blogs";
import Testimonial from "./components/Testimonial";
import Chambers from "./components/Chambers";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import PageLoader from "./components/PageLoader";
import { motion } from "framer-motion";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

export default function Home() {
  return (
    <>
      <PageLoader />
      <div className="overflow-x-hidden">
        <Navbar />
        <motion.div variants={fadeInUp} initial="hidden" animate="show">
          <Hero />
        </motion.div>
        <Facility />
        <Servicelist />
        <Banner />
        <Chambers />
        <Blogs />
        <Testimonial />
        <Footer />
      </div>
    </>
  );
}
