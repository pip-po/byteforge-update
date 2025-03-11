"use client";

import { FileLock2, Handshake, Lightbulb } from "lucide-react";
import Link from "next/link";

export default function CultureSection() {
  return (
    <section className="py-16 bg-gray-100  rounded-lg mt-8 text-gray-900">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Our Culture & Values</h2>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          At <span className="font-semibold">ByteForge</span>, we believe that
          great technology comes from great people. Our culture is built on
          innovation, collaboration, and integrity.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md flex flex-col items-center"
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{value.title}</h3>
              <p className="text-gray-600 text-sm text-center">
                {value.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <Link
            href="/contact"
            className="inline-block px-6 py-3 bg-[#272727] text-white font-semibold rounded-lg shadow-md hover:bg-[#272727]/70 transition"
          >
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}

const values = [
  {
    icon: <Lightbulb size={40} />,
    title: "Innovation",
    description:
      "We stay ahead of the curve by continuously exploring new technologies.",
  },
  {
    icon: <Handshake size={40} />,
    title: "Collaboration",
    description: "We work as a team, valuing diverse ideas and perspectives.",
  },
  {
    icon: <FileLock2 size={40} />,
    title: "Integrity",
    description:
      "We prioritize transparency, trust, and ethical business practices.",
  },
];
