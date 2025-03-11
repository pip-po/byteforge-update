"use client";

import Link from "next/link";
import React from "react";

const CTASection = React.memo(() => {
  return (
    <section className="flex flex-col mt-10 items-center justify-center text-center py-16 md:py-20 px-4 sm:px-6 bg text-[#272727] shadow-lg">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 max-w-3xl">
        Ready to take your business to the next level?
      </h2>
      <p className="text-base sm:text-lg md:text-xl mb-6 max-w-2xl">
        Get in Touch Today!
      </p>
      <div>
        <Link
          href="/contact"
          className="inline-block bg-[#272727] text-[#ffffff] font-semibold text-base sm:text-lg px-5 sm:px-6 py-2 sm:py-3 rounded-full shadow-md transition duration-300 hover:text-[#272727] hover:bg-gray-200"
        >
          Contact Us
        </Link>
      </div>
    </section>
  );
});

// Add display name for better debugging
CTASection.displayName = "CTASection";

export default CTASection;
