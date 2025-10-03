"use client";
import { motion } from "framer-motion";

const chambers = [
  {
    name: "New Maity Medical",
    address:
      "Opposite Amta Hospital, Chandni, Amta, Howrah, West Bengal 711401",
    phone: "097325 87898",
  },
  {
    name: "HEALTH CITY CLINIC",
    address: "Bazarpara, Uluberia, Howrah, West Bengal 711316",
    phone: "080171 14486",
  },
  {
    name: "Sefa diagnostic centre & poly clinic",
    address:
      "Ranihati-Amta Road, RANIHATI M. PLAZA MARKET (Near State Bank of India), Ranihati, West Bengal 711302",
    phone: "084205 80021",
  },
  {
    name: "Mamata Medico",
    address:
      "J6JG+P6Q, Howrah-Domjur-Bargachhia-Amta, Fokor Dokan, Baruipara, Domjur, Howrah, West Bengal 711405",
    phone: "098309 41639",
  },
  {
    name: "Popular Doctor's Chamber",
    address:
      "Shop No, Ca-16, Rail Pukur Rd, near Delight, Deshbandhu Nagar, Baguiati, Kolkata, West Bengal 700059",
    phone: "091633 05444",
  },
  {
    name: "Kushari Pharmacy",
    address: "Rate Para Rd, Ratepara, Bangaon, West Bengal 743235",
    phone: "084365 01700",
  },
  {
    name: "Ganguly Medical Stores",
    address: "VQC3+M2H, Kalibari Rd, Garhpara, Gobardanga, West Bengal 743252",
    phone: "097326 38601",
  },
  {
    name: "Pharmaco Doctors Chamber",
    address: "RMV4+3RX, Habra, West Bengal 743271",
    phone: "092323 08679",
  },
  {
    name: "Millennium Diagnostic Centre",
    address:
      "Binapani Apartment, Krishnanagar Rd, Noapara, Barasat, West Bengal 700124",
    phone: "098362 08500",
  },
  {
    name: "Romalinda Multispeciality Hospital & Diagnostic Centre",
    address:
      "Netaji Subhas Road, Netaji Nagar, Madhyamgram, Kolkata, West Bengal 700132",
    phone: "074396 90721",
  },
  {
    name: "Apollo Clinic Birati",
    address:
      "25, Madhusudan Banerjee Rd, Pratiraksha Nagar, Birati, North Dumdum, West Bengal 700051",
    phone: "099039 52999",
  },
  {
    name: "Asha The Hope",
    address:
      "33, J N Tewari Rd, Gora Bazar, Rajbari, Dum Dum, Kolkata, West Bengal 700028",
    phone: "094323 07066",
  },
];

export default function ChambersCards() {
  return (
    <div className="px-6 md:px-12 lg:px-20 py-14">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl text-[26px] sm:text-[32px] text-black font-medium ibrand-font ">
          🏥 Chambers
        </h2>
        <p className="text-gray-600 mt-2">
          Find me at these trusted clinics and medical centres
        </p>
      </motion.div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 font-medium ibrand-font">
        {chambers.map((chamber, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: "easeOut" }}
            className="bg-white rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300 border border-gray-100 flex flex-col justify-between min-h-[220px]"
          >
            <div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">
                {chamber.name}
              </h3>
              <p className="text-gray-600 text-sm">{chamber.address}</p>
            </div>
            <a
              href={`tel:${chamber.phone.replace(/\s/g, "")}`}
              className="text-pink-600 font-semibold hover:underline mt-4"
            >
              📞 {chamber.phone}
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
