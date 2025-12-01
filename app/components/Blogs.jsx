"use client";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const Blog = [
  {
    id: 200,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuU3vgIlQDXkkCF_sX2IDeuLhD3quukijQf0cVvv5LQvmoeqKGnQZ2mVyuYs81nQv9hE&usqp=CAU",
    button: "Read More",
    text: "Understanding Depression: Learn about its symptoms, causes, and how timely treatment can help restore quality of life.",
    link: "/blogs/depression",
    href: "/blog1",
  },
  {
    id: 201,
    src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTuU3vgIlQDXkkCF_sX2IDeuLhD3quukijQf0cVvv5LQvmoeqKGnQZ2mVyuYs81nQv9hE&usqp=CAU",
    button: "Read More",
    text: "Managing Anxiety & Panic Attacks: Practical coping strategies and professional treatments that bring lasting relief.",
    link: "/blogs/anxiety",
    href: "/blog2",
  },
];

const containerVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.5,
      ease: "easeInOut",
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.5 + i * 0.3,
      duration: 1,
      ease: "easeOut",
    },
  }),
};

const Blogs = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariant}
      className="w-full px-4 md:px-8 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
    >
      {/* Left Image Block */}
      <div className="lg:col-span-6 flex justify-center lg:justify-end relative lg:pr-68">
        <div className="w-[250px] sm:w-[300px] h-[300px] sm:h-[350px] rounded-[30px] overflow-hidden absolute top-4 left-2 lg:left-12 z-0" />
        <img
          src="/img/thumb_400.jpg"
          alt=""
          className="w-[250px] sm:w-[300px] h-[300px] sm:h-[350px] rounded-[30px] relative z-10 translate-x-4"
        />
      </div>

      {/* Right Content */}
      <div className="lg:col-span-6 space-y-6">
        <h1 className="text-[26px] sm:text-[32px] text-black font-medium ibrand-font text-center lg:text-left">
          Our Latest <span className="text-[#3EC8BD]">Blogs</span>
        </h1>
        <p className="text-[12px] sm:text-[14px] text-gray-600 text-center lg:text-left">
          Explore useful insights and guides on mental health, therapy, and
          recovery — written to help patients and families understand better.
        </p>

        {/* Blog Cards */}
        <div className="space-y-5">
          {Blog.map((blogs, index) => (
            <motion.div
              key={blogs.id}
              custom={index}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={cardVariant}
              className="flex flex-col sm:flex-row bg-white shadow-md rounded-xl p-4 transition hover:shadow-lg"
            >
              <img
                src={blogs.src}
                className="w-full sm:w-[100px] h-[150px] sm:h-[100px] object-cover rounded-md mb-3 sm:mb-0 sm:mr-4"
                alt={`Blog ${index + 1}`}
              />
              <div className="flex flex-col justify-between text-[12px]">
                <p className="mb-2">{blogs.text}</p>

                <Link href={blogs.href}>
                  <button className="bg-[#3EC8BD] px-3 py-1 rounded-md text-white text-[10px] w-fit hover:bg-[#35b2aa] transition">
                    {blogs.button}
                  </button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Blogs;
