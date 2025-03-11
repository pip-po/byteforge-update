"use client";

import Link from "next/link";

const CTAServices = () => {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6  text-[#272727] rounded-2xl shadow-lg">
      <h2 className="text-4xl md:text-5xl leading-16 font-bold mb-4">
        Join the businesses that trust{" "}
        <span className="bg-[#272727] p-1 text-white">ByteForge!</span> <br />
        Let’s create success together!"
      </h2>
      <p className="text-lg md:text-xl mb-6">Get in Touch Today!</p>
      <div>
        <Link
          href="/contact"
          className="bg-white text-[#272727] font-semibold text-lg px-6 py-3 rounded-full shadow-md hover:bg-[#272727]/10 transition duration-300"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
};

export default CTAServices;
