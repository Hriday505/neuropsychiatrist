"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const chambers = [
  {
    name: "Asha The Hope",
    address:
      "33, J N Tewari Rd, Gora Bazar, Rajbari, Dum Dum, Kolkata, West Bengal 700028",
    phone: "094323 07066",
  },
  {
    name: "Apollo Clinic Birati",
    address:
      "25, Madhusudan Banerjee Rd, Pratiraksha Nagar, Birati, North Dumdum, West Bengal 700051",
    phone: "099039 52999",
  },
  {
    name: "Doctor Plus",
    address:
      "AKD House, 65/2, Madhusudan Banerjee Rd, Mahajati Nagar, Birati, Kolkata, North Dumdum, West Bengal 700051",
    phone: "6289901792",
  },
  {
    name: "Popular Doctor's Chamber",
    address:
      "Shop No, Ca-16, Rail Pukur Rd, near Delight, Deshbandhu Nagar, Baguiati, Kolkata, West Bengal 700059",
    phone: "9007085943",
  },
  {
    name: "Romalinda Multispeciality Hospital & Diagnostic Centre",
    address:
      "Netaji Subhas Road, Netaji Nagar, Madhyamgram, Kolkata, West Bengal 700132",
    phone: "074396 90721",
  },
  {
    name: "Millennium Diagnostic Centre",
    address:
      "Binapani Apartment, Krishnanagar Rd, Noapara, Barasat, West Bengal 700124",
    phone: "9831571605",
  },
  {
    name: "Pharmaco Doctors Chamber",
    address: "RMV4+3RX, Habra, West Bengal 743271",
    phone: "092323 08679",
  },
  {
    name: "Krishna Medicle Hall",
    address: "Swamiji Road, Swamiji Roadgourbanga Road, Habra-743263",
    phone: "9735636873",
  },
  {
    name: "Ganguly Medical Stores",
    address: "VQC3+M2H, Kalibari Rd, Garhpara, Gobardanga, West Bengal 743252",
    phone: "097326 38601",
  },
  {
    name: "Kushari Pharmacy",
    address: "Rate Para Rd, Ratepara, Bangaon, West Bengal 743235",
    phone: "084365 01700",
  },
  {
    name: "Saha Medical",
    address: "Sarat Bisaw Road, Kacharipara, Basirhat, West Bengal 743411",
    phone: "7063667887 || 70013 40601",
  },
  {
    name: "HEALTH CITY CLINIC",
    address: "Bazarpara, Uluberia, Howrah, West Bengal 711316",
    phone: "8697628661",
  },
  {
    name: "New Maity Medical",
    address:
      "Opposite Amta Hospital, Chandni, Amta, Howrah, West Bengal 711401",
    phone: "8617427828",
  },
  {
    name: "Sefa diagnostic centre & poly clinic",
    address:
      "Ranihati-Amta Road, RANIHATI M. PLAZA MARKET (Near State Bank of India), Ranihati, West Bengal 711302",
    phone: "084205 80021",
  },
];

const CACHE_KEY = "chambersGeoCache.v1";

// --- Region helpers ---
const ORDER = ["Kolkata", "Howrah", "Hooghly", "Others"];
const KEYWORDS = {
  Kolkata: [
    "kolkata",
    "dum dum",
    "dumdum",
    "birati",
    "baguiati",
    "madhyamgram",
    "barasat",
    "new town",
    "rajarhat",
    "north dumdum",
  ],
  Howrah: [
    "howrah",
    "uluberia",
    "amta",
    "domjur",
    "ranihati",
    "bally",
    "liluah",
    "shibpur",
    "santragachi",
    "dankuni (howrah)",
  ],
  Hooghly: [
    "hooghly",
    "chinsurah",
    "bandel",
    "serampore",
    "chandannagar",
    "uttarpara",
    "bansberia",
    "konnagar",
    "hindmotor",
    "dankuni",
  ],
};
function regionFrom(address) {
  const a = address.toLowerCase();
  for (const r of ["Kolkata", "Howrah", "Hooghly"]) {
    if (KEYWORDS[r].some((k) => a.includes(k))) return r;
  }
  return "Others";
}

export default function ChambersCards() {
  const [geo, setGeo] = useState({}); // { [index]: {lat,lon} }
  const [busy, setBusy] = useState(false);

  const sleep = (ms) => new Promise((r) => setTimeout(r, ms));
  const readCache = () => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(localStorage.getItem(CACHE_KEY) || "{}");
    } catch {
      return {};
    }
  };
  const writeCache = (cache) => {
    if (typeof window === "undefined") return;
    localStorage.setItem(CACHE_KEY, JSON.stringify(cache));
  };
  async function geocode(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=jsonv2&limit=1&addressdetails=0&accept-language=en&q=${encodeURIComponent(
      address
    )}`;
    const res = await fetch(url, { headers: { Accept: "application/json" } });
    if (!res.ok) return null;
    const data = await res.json();
    if (!data?.length) return null;
    return { lat: parseFloat(data[0].lat), lon: parseFloat(data[0].lon) };
  }

  // Geocode all (cached)
  useEffect(() => {
    let cancelled = false;
    (async () => {
      setBusy(true);
      const cache = readCache();
      for (let i = 0; i < chambers.length; i++) {
        const key = `${chambers[i].name} | ${chambers[i].address}`;
        let coords = cache[key];
        if (!coords) {
          const q = `${chambers[i].name}, ${chambers[i].address}, West Bengal, India`;
          try {
            coords = await geocode(q);
          } catch {
            coords = null;
          }
          await sleep(1100);
          if (coords) {
            cache[key] = coords;
            writeCache(cache);
          }
        }
        if (!cancelled && coords) setGeo((p) => ({ ...p, [i]: coords }));
      }
      if (!cancelled) setBusy(false);
    })();
    return () => {
      cancelled = true;
    };
  }, []);

  // Build groups in desired order
  const groups = ORDER.reduce((acc, r) => ({ ...acc, [r]: [] }), {});
  chambers.forEach((c, i) => {
    const r = regionFrom(c.address);
    (groups[r] ||= []).push({ ...c, _i: i });
  });

  const Section = ({ title, items }) =>
    items.length ? (
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">{title}</h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 font-medium ibrand-font">
          {items.map((ch) => {
            const coords = geo[ch._i];
            const addrEncoded = encodeURIComponent(ch.address);
            const mapQuery = coords
              ? `${coords.lat},${coords.lon}`
              : addrEncoded;
            return (
              <motion.div
                key={ch._i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-5 hover:shadow-xl transition duration-300 border border-gray-100 dark:border-gray-700 flex flex-col justify-between min-h-[240px]"
              >
                <div>
                  <h4 className="text-lg font-bold text-gray-800 dark:text-white mb-2">
                    {ch.name}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">{ch.address}</p>
                  <div className="mt-3 text-xs text-gray-500 dark:text-gray-400">
                    {coords ? (
                      <span>
                        📍 {coords.lat.toFixed(5)}, {coords.lon.toFixed(5)}
                      </span>
                    ) : (
                      <span className="text-gray-400">📍 locating…</span>
                    )}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-3 items-center">
                  <a
                    href={`tel:${ch.phone.replace(/\s/g, "")}`}
                    className="text-pink-600 font-semibold hover:underline"
                  >
                    📞 {ch.phone}
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
                    className="text-blue-600 hover:underline"
                  >
                    View Map
                  </a>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href={`https://www.google.com/maps/dir/?api=1&destination=${mapQuery}`}
                    className="text-green-600 hover:underline"
                  >
                    Directions
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    ) : null;

  return (
    <div className="px-6 md:px-12 lg:px-20 py-14 bg-white dark:bg-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl text-[26px] sm:text-[32px] text-black dark:text-white font-medium ibrand-font">
          🏥 Chambers
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mt-2">
          Find me at these trusted clinics and medical centres
          {busy && (
            <span className="ml-2 text-xs text-gray-400">
              (finding locations…)
            </span>
          )}
        </p>
      </motion.div>

      {/* Sections in fixed order */}
      <Section title="Kolkata" items={groups.Kolkata} />
      <Section title="Howrah" items={groups.Howrah} />
      <Section title="Hooghly" items={groups.Hooghly} />
      <Section title="Others" items={groups.Others} />
    </div>
  );
}
