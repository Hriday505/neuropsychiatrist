"use client";
import React, { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const Menue = [
  { id: "101", name: "Home", href: "/" },
  { id: "102", name: "About", href: "/about" },
  {
    id: "103",
    name: "What We Treat",
    href: "/services",
    submenu: [
      { id: "201", name: "Depression", href: "/depression" },
      {
        id: "202",
        name: "Generalised Anxiety Disorder",
        href: "/generalised",
      },
      { id: "203", name: "Panic Disorder", href: "/panic" },
      {
        id: "204",
        name: "Obsessive Compulsive Disorder",
        href: "/ocd",
      },
      { id: "205", name: "Schizophrenia", href: "/schizo" },
      { id: "206", name: "Autism Spectrum Disorder", href: "/autism" },
      { id: "207", name: "ADHD", href: "/adhd" },
      { id: "208", name: "Sexual Dysfunction", href: "/sexual-dysfunction" },
      { id: "209", name: "Substance Abuse", href: "/substance-abuse" },
      { id: "210", name: "Dementia", href: "/dementia" },
    ],
  },
  { id: "104", name: "Contact", href: "/contact" },
];

const logoVariant = {
  hidden: { y: -30, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.8, ease: "easeOut" } },
};

const navBlockVariant = {
  hidden: { y: -40, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <nav className="w-full fixed top-0 left-0 bg-white dark:bg-gray-900 z-[9999] shadow-sm">
      <div className="w-full px-4 py-3 flex items-center justify-between max-w-[1200px] mx-auto">
        {/* Logo */}
        <motion.div
          className="shrink-0 mr-auto xl:ml-[-16px]"
          variants={logoVariant}
          initial="hidden"
          animate="visible"
        >
          <Link href="/" className="text-[40px] font-bold text-gray-900 dark:text-white">
            Dr. Abir Das
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          className="hidden xl:flex items-center space-x-12 font-medium relative"
          variants={navBlockVariant}
          initial="hidden"
          animate="visible"
        >
          {Menue.map((item) => (
            <li
              key={item.id}
              className="relative"
              onMouseEnter={() => item.submenu && setDropdownOpen(true)}
              onMouseLeave={() => item.submenu && setDropdownOpen(false)}
            >
              {item.submenu ? (
                <>
                  <button className="flex items-center gap-1 hover:text-[#3EC8BD] transition duration-200 text-gray-900 dark:text-white">
                    {item.name}
                    <ChevronDown size={18} />
                  </button>

                  {/* Dropdown */}
                  <AnimatePresence>
                    {dropdownOpen && (
                      <motion.ul
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="absolute left-0 mt-2 w-64 bg-white dark:bg-gray-800 shadow-lg rounded-lg p-3 space-y-2 z-[9999]"
                      >
                        {item.submenu.map((sub) => (
                          <li key={sub.id}>
                            <Link
                              href={sub.href}
                              className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-900 dark:text-white"
                            >
                              {sub.name}
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    )}
                  </AnimatePresence>
                </>
              ) : (
                <Link
                  href={item.href}
                  className="cursor-pointer hover:text-[#3EC8BD] transition duration-200 text-gray-900 dark:text-white"
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
          <Link
            href="/appointment"
            className="bg-[#3EC8BD] px-4 py-2 rounded-[10px] text-white hover:bg-[#30b0a6] transition duration-300"
          >
            Book Appointment
          </Link>
        </motion.ul>

        {/* Mobile Toggle */}
        <div className="lg:hidden block z-50">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-black dark:text-white focus:outline-none"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: isOpen ? 0 : -20, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className={`lg:hidden w-full bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[600px] py-4" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col space-y-4 px-6 font-medium">
          {Menue.map((item) => (
            <li key={item.id} className="relative">
              {item.submenu ? (
                <>
                  <button
                    className="flex items-center gap-1 hover:text-[#3EC8BD] transition duration-200 text-gray-900 dark:text-white"
                    onClick={() => setDropdownOpen((prev) => !prev)}
                  >
                    {item.name}
                    <ChevronDown size={18} />
                  </button>

                  {dropdownOpen && (
                    <ul className="ml-4 mt-2 space-y-2 z-[9999] relative">
                      {item.submenu.map((sub) => (
                        <li key={sub.id}>
                          <Link
                            href={sub.href}
                            className="block px-3 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md text-gray-900 dark:text-white"
                            onClick={() => setIsOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  className="cursor-pointer hover:text-[#3EC8BD] transition duration-200 text-gray-900 dark:text-white"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              )}
            </li>
          ))}
          <Link
            href="/appointment"
            className="bg-[#3EC8BD] px-4 py-2 rounded-[10px] text-white hover:bg-[#30b0a6] transition duration-300 w-fit"
            onClick={() => setIsOpen(false)}
          >
            Book Appointment
          </Link>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
