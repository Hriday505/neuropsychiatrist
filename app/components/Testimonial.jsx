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
      className="w-full min-h-[60vh] pt-24 pb-8 lg:pt-32 relative inset-0 bg-cover bg-center"
      style={{ backgroundImage: `url('/img/neuro.png')` }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-teal-500 opacity-70 z-10"
        style={{ backgroundColor: "rgba(0, 190, 185, 0.9)" }}
      ></div>

      {/* Content */}
      <div className="relative z-20 px-4">
        <h1 className="text-center pt-8 text-[28px] sm:text-[36px] lg:text-[45px] text-white font-medium ibrand-font">
          Patient Testimonial
        </h1>
        <p className="text-white text-[12px] sm:text-[14px] text-center mb-6">
          Real experiences from our patients
        </p>

        {/* Scroll buttons and cards container */}
        <div className="relative max-w-[1200px] mx-auto">
          {/* Left Button - Hidden on mobile */}
          <button
            onClick={scrollLeft}
            className="hidden   lg:block -ml-14  absolute left-0 top-1/2 -translate-y-1/2 z-30 w-[32px] h-[32px] rounded-full bg-emerald-300 shadow-md"
          >
            <FaArrowLeft className="text-[18px]    m-auto" />
          </button>

          {/* Scrollable Cards */}
          <div
            ref={slideRef}
            className="flex gap-4 lg:gap-4 overflow-x-auto hide-scrollbar px-4 lg:px-12"
            style={{
              scrollSnapType: "x mandatory",
              scrollbarWidth: "none",
            }}
          >
            {Cards.map((item) => (
              <div
                key={item.id}
                className="w-[280px] sm:w-[300px] lg:w-[320px] h-auto min-h-[280px] bg-white rounded-xl shadow-lg p-4 lg:p-6 flex-shrink-0"
                style={{ scrollSnapAlign: "start" }}
              >
                <div className="flex items-center mb-3">
                  <img
                    src={item.profile}
                    alt={item.name}
                    className="w-[45px] h-[45px] lg:w-[55px] lg:h-[55px] rounded-full mr-3"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800 text-sm lg:text-base">
                      {item.name}
                    </h3>
                    <p className="text-xs lg:text-sm text-gray-500">
                      {item.treatment}
                    </p>
                  </div>
                </div>

                <h4 className="text-[14px] lg:text-[16px] font-bold text-gray-800 mb-2">
                  {item.headline}
                </h4>
                <p className="text-xs lg:text-sm text-gray-600 leading-relaxed">
                  {item.testimony}
                </p>
              </div>
            ))}
          </div>

          {/* Right Button - Hidden on mobile */}
          <button
            onClick={scrollRight}
            className="hidden lg:block -mr-14 absolute right-0 top-1/2 -translate-y-1/2 z-30 w-[32px] h-[32px] rounded-full bg-emerald-300 shadow-md"
          >
            <FaArrowRight className="text-[18px]  m-auto" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
