// app/about/page.tsx (Next.js 13+ with App Router)
// or pages/about.tsx (Next.js 12/13 with Pages Router)
import Image from "next/image";

export default function About() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-teal-600 text-white py-16 px-6 lg:px-20 text-center">
        <h1 className="text-4xl font-bold mb-4">Who We Are</h1>
        <p className="max-w-2xl mx-auto text-lg">
          Dedicated to Exceptional Care and Compassionate Service — providing
          trusted healthcare for every patient, every time.
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button className="bg-white text-teal-600 px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
            Learn More
          </button>
          <button className="bg-teal-800 text-white px-6 py-3 rounded-full shadow hover:bg-teal-900 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10">
        <div className="flex-1">
          <Image
            src="/images/clinic-team.jpg" // replace with your image
            alt="Our Team"
            width={600}
            height={400}
            className="rounded-2xl shadow-lg"
          />
        </div>
        <div className="flex-1 text-center lg:text-left">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">Our Journey</h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Since our inception, MediCare has been committed to transforming
            healthcare by making it simple, affordable, and accessible. Our
            mission is to empower every patient with the care they deserve,
            ensuring healthier, happier lives.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-16 bg-gray-50 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-10">
          Our Mission, Vision & Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-bold text-teal-600 mb-3">Mission</h3>
            <p className="text-gray-600">
              To make healthcare simple, affordable, and reliable for everyone.
            </p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-bold text-teal-600 mb-3">Vision</h3>
            <p className="text-gray-600">
              To be the most trusted and innovative healthcare provider in the
              region.
            </p>
          </div>
          <div className="bg-white shadow rounded-xl p-6">
            <h3 className="text-xl font-bold text-teal-600 mb-3">Values</h3>
            <p className="text-gray-600">
              Compassion, Integrity, Innovation, and Excellence in every service
              we deliver.
            </p>
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-16 px-6 lg:px-20 text-center">
        <h2 className="text-3xl font-bold text-teal-600 mb-10">
          Meet Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {[
            {
              name: "Dr. John Smith",
              role: "Cardiologist",
              img: "/images/doc1.jpg",
            },
            {
              name: "Dr. Bella Adison",
              role: "Pediatrician",
              img: "/images/doc2.jpg",
            },
            {
              name: "Dr. Paul Tan",
              role: "Dermatologist",
              img: "/images/doc3.jpg",
            },
          ].map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow hover:shadow-lg transition p-6 flex flex-col items-center"
            >
              <Image
                src={member.img}
                alt={member.name}
                width={150}
                height={150}
                className="rounded-full mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">
                {member.name}
              </h3>
              <p className="text-teal-600">{member.role}</p>
              <button className="mt-4 bg-teal-600 text-white px-4 py-2 rounded-full hover:bg-teal-700 transition">
                Book Appointment
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-teal-600 text-white text-center px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-10">Why Choose Us</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {[
            "24/7 Availability",
            "Certified Doctors",
            "Modern Equipment",
            "Easy Appointments",
            "Patient-Centered Care",
          ].map((text, idx) => (
            <div
              key={idx}
              className="bg-white/10 backdrop-blur-md rounded-xl p-4"
            >
              <p className="font-semibold">{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 text-center bg-gray-50 px-6">
        <h2 className="text-3xl font-bold text-gray-800">
          Ready to Experience Exceptional Care?
        </h2>
        <Link
          href="/appointment"
          className="bg-[#3EC8BD] px-4 py-2 rounded-[10px] text-white hover:bg-[#30b0a6] transition duration-300"
        >
          Book Appointment
        </Link>
      </section>
    </div>
  );
}
