"use client";
import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import Link from "next/link";

// Footer Menus
const FooterMenue = [
  { id: "101", name: "Privacy Policy", href: "/privacy" },
  { id: "102", name: "Terms & Condition", href: "/terms" },
  { id: "103", name: "FAQ", href: "/faq" },
];

const HeaderMenue = [
  { id: "101", name: "Home", href: "/" },
  { id: "102", name: "About", href: "/about" },
  { id: "103", name: "Services", href: "/services" },
  { id: "104", name: "Contact", href: "/contact" },
];

// ✅ All Chambers List
const Chambers = [
  {
    id: "1",
    name: "New Maity Medical",
    address: "Opposite Amta Hospital, Chandni, Amta, Howrah",
  },
  {
    id: "2",
    name: "Health City Clinic",
    address: "Bazarpara, Uluberia, Howrah",
  },
  {
    id: "3",
    name: "Sefa Diagnostic Centre",
    address: "Ranihati-Amta Road, Ranihati M. Plaza Market",
  },
  { id: "4", name: "Mamata Medico", address: "Domjur, Baruipara, Howrah" },
  {
    id: "5",
    name: "Popular Doctor's Chamber",
    address: "Rail Pukur Rd, Baguiati, Kolkata",
  },
  { id: "6", name: "Kushari Pharmacy", address: "Ratepara, Bangaon" },
  {
    id: "7",
    name: "Ganguly Medical Stores",
    address: "Kalibari Rd, Gobardanga",
  },
  { id: "8", name: "Pharmaco Doctors Chamber", address: "Habra, West Bengal" },
  {
    id: "9",
    name: "Millennium Diagnostic Centre",
    address: "Krishnanagar Rd, Noapara, Barasat",
  },
  {
    id: "10",
    name: "Romalinda Multispeciality Hospital",
    address: "Netaji Nagar, Madhyamgram, Kolkata",
  },
  {
    id: "11",
    name: "Apollo Clinic Birati",
    address: "Madhusudan Banerjee Rd, Birati, Kolkata",
  },
  {
    id: "12",
    name: "Asha The Hope",
    address: "J N Tewari Rd, Dum Dum, Kolkata",
  },
];

// Social Icons
const FaFacebookF = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaFacebookF)
);
const FaInstagram = dynamic(() =>
  import("react-icons/fa").then((mod) => mod.FaInstagram)
);
const FaXTwitter = dynamic(() =>
  import("react-icons/fa6").then((mod) => mod.FaXTwitter)
);
const GoLocation = dynamic(() =>
  import("react-icons/go").then((mod) => mod.GoLocation)
);
const MdEmail = dynamic(() =>
  import("react-icons/md").then((mod) => mod.MdEmail)
);
const BsTelephone = dynamic(() =>
  import("react-icons/bs").then((mod) => mod.BsTelephone)
);

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-full mt-10 bg-teal-950 pt-12 pb-6 px-4 md:px-8 lg:px-12"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 max-w-[1240px] mx-auto">
        {/* Logo & About */}
        <div className="lg:w-[25%] w-full">
          <h2 className="text-white text-xl font-bold mb-3">Neuroliving</h2>
          <p className="text-white text-sm leading-relaxed ibrand-font">
            Compassionate psychiatric care and modern treatment across Kolkata,
            Howrah, and North 24 Parganas.
          </p>

          <p className="text-white mt-4 ibrand-font font-semibold">Follow Us</p>
          <div className="flex space-x-3 mt-3">
            {[FaFacebookF, FaInstagram, FaXTwitter].map((Icon, idx) => (
              <div
                key={idx}
                className="bg-white rounded-full p-2 hover:scale-110 transition"
              >
                <Icon className="text-teal-500 text-[18px]" />
              </div>
            ))}
          </div>
        </div>

        {/* Main Menu */}
        <div className="w-full md:w-[25%] lg:w-[12%]">
          <h2 className="text-white font-bold">Main Menu</h2>
          {HeaderMenue.map((item) => (
            <li key={item.id} className="list-none">
              <Link
                href={item.href}
                className="text-white text-sm ibrand-font mt-4 hover:underline cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </div>

        {/* Footer Menu */}
        <div className="w-full md:w-[25%] lg:w-[12%]">
          <h2 className="text-white font-bold">Footer Menu</h2>
          {FooterMenue.map((item) => (
            <li key={item.id} className="list-none">
              <Link
                href={item.href}
                className="text-white text-sm ibrand-font mt-4 hover:underline cursor-pointer"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </div>

        {/* Chambers Preview */}
        <div className="w-full md:w-[25%] lg:w-[20%]">
          <h2 className="text-white font-bold">Chambers</h2>
          {Chambers.slice(0, 3).map((ch) => (
            <p
              key={ch.id}
              className="text-white text-sm mt-3 ibrand-font leading-snug"
            >
              <strong>{ch.name}</strong> — {ch.address}
            </p>
          ))}
          <Link
            href="#Chambers"
            className="text-teal-400 text-sm mt-3 inline-block hover:underline"
          >
            View All Chambers →
          </Link>
        </div>

        {/* Contact Section */}
        <div className="w-full lg:w-[25%]">
          <h2 className="text-white font-bold">Contact Us</h2>
          <div className="flex items-start mt-4 gap-3">
            <div className="bg-white w-[28px] h-[28px] rounded-full flex items-center justify-center">
              <GoLocation className="text-teal-500 text-[14px]" />
            </div>
            <p className="text-white text-sm ibrand-font leading-snug">
              Kolkata, Howrah & North 24 Parganas
            </p>
          </div>

          <div className="flex items-start mt-3 gap-3">
            <div className="bg-white w-[28px] h-[28px] rounded-full flex items-center justify-center">
              <MdEmail className="text-teal-500 text-[14px]" />
            </div>
            <p className="text-white text-sm ibrand-font">
              drabirdas009@gmail.com
            </p>
          </div>

          <div className="flex items-start mt-3 gap-3">
            <div className="bg-white w-[28px] h-[28px] rounded-full flex items-center justify-center">
              <BsTelephone className="text-teal-500 text-[14px]" />
            </div>
            <p className="text-white text-sm ibrand-font">+91 89064 62824</p>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 w-full">
        <div className="max-w-[1240px] mx-auto px-4 text-center">
          <div className="h-[1px] w-full bg-white opacity-30 mb-2"></div>
          <p className="text-white text-[12px] ibrand-font">
            © {new Date().getFullYear()} Neuroliving. All Rights Reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
