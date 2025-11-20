"use client";
import React, { useRef } from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { FaArrowRight } from "react-icons/fa";
const Cards = [
  {
    id: 10,
    profile: "/img/user.png", // Bengali man look
    name: "Sourav Chatterjee",
    treatment: "Depression Treatment",
    headline: "Feeling like myself again",
    testimony:
      "I went through months of sadness and hopelessness. With regular sessions, I feel lighter and more positive now.",
  },
  {
    id: 11,
    profile: "/img/user.png", // Bengali man look
    name: "Moumita Sen",
    treatment: "Anxiety Therapy",
    headline: "Calmness in everyday life",
    testimony:
      "I used to feel restless and anxious all the time. The counselling sessions gave me peace of mind and clarity.",
  },
  {
    id: 12,
    profile: "/img/user.png", // Bengali man look
    name: "Arindam Ghosh",
    treatment: "Panic Disorder",
    headline: "Overcame panic attacks",
    testimony:
      "I often faced sudden panic attacks. With treatment, they are now rare and I can go about my daily life confidently.",
  },
  {
    id: 13,
    profile: "/img/user.png", // Bengali man look
    name: "Debjani Das",
    treatment: "OCD Treatment",
    headline: "Regained control of life",
    testimony:
      "My repeated habits used to control me. After therapy, I feel free and can focus better on family and work.",
  },
  {
    id: 14,
    profile: "/img/user.png", // Bengali man look
    name: "Subhasish Roy",
    treatment: "Schizophrenia Care",
    headline: "Supportive and caring approach",
    testimony:
      "Living with schizophrenia was difficult. With the doctor’s guidance, my condition is stable and I feel hopeful again.",
  },
];

const Testimonial = () => {
  const slideRef = useRef(null);

  const scrollLeft = () => {
    slideRef.current?.scrollBy({ left: -320, behavior: "smooth" });
  };
  const scrollRight = () => {
    slideRef.current?.scrollBy({ left: 320, behavior: "smooth" });
  };

  return (
    <div
      className="w-full h-[60vh] relative inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('/img/neuro.png')` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-teal-500 opacity-70 z-10"
        style={{ backgroundColor: "rgba(0, 190, 185, 0.9)" }}
      ></div>

      {/* Content */}
      <div className="relative z-20">
        <h1 className="text-center pt-11 text-[45px] text-white font-medium ibrand-font">
          Patient Testimonial
        </h1>
        <p className="text-white text-[12px] text-center mb-6">
          Lorem ipsum dolor sit amet consectetur sit amet consectetur
        </p>

        {/* Scroll buttons in the same flex container */}
        <div className="relative flex items-center justify-center">
          {/* Left Button */}
          <button
            onClick={scrollLeft}
            className="absolute left-[5%] top-1/2 -translate-y-1/2 z-30 w-[32px] h-[32px] rounded-full bg-white shadow-md"
          >
            <FaArrowLeft className="text-[22px] m-auto" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={slideRef}
            className="relative flex gap-6 px-4 w-[960px] mx-auto hide-scrollbar overflow-x-auto"
            style={{
              scrollSnapType: "x mandatory",
              overflowX: "scroll",
              scrollbarWidth: "none",
            }}
          >
            {Cards.map((item) => (
              <div
                key={item.id}
                className="w-[300px] h-[35vh] bg-white rounded-xl shadow-lg p-6 flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex items-center mb-4">
                  <img
                    src={item.profile}
                    alt={item.name}
                    className="w-[55px] h-[55px] rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.treatment}</p>
                  </div>
                </div>

                <h4 className="text-[16px] font-bold text-gray-800 mb-2">
                  {item.headline}
                </h4>
                <p className="text-sm text-gray-600">{item.testimony}</p>
              </div>
            ))}
          </div>

          {/* Right Button */}
          <button
            onClick={scrollRight}
            className="absolute right-[5%] top-1/2 -translate-y-1/2 z-30 w-[32px] h-[32px] rounded-full bg-white shadow-md"
          >
            <FaArrowRight className="text-[22px] m-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
