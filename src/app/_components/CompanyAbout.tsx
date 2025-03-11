"use client";
import React from "react";

export const CompanyAbout = () => {
  return (
    <div className="container mx-auto px-10 py-8 md:py-12">
      {/* Use Tailwind classes instead of inline styles for max-height */}
      <div className="max-h-[400px] md:max-h-[300px] relative p-4 md:p-6 md:mx-7 rounded-lg overflow-hidden">
        {/* Grid background with faded edges */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url(/grid2.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            maskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 10%, black 90%, transparent), linear-gradient(to bottom, transparent, black 10%, black 90%, transparent)",
            maskComposite: "intersect",
            WebkitMaskComposite: "source-in",
          }}
        />

        {/* Content */}
        <div className="bg-white rounded-xl border">
          <p className="relative z-10 text-[#272727] text-lg md:text-xl lg:text-2xl text-center bg-white/80 p-4 rounded-lg">
            ByteForge is a leading technology consulting firm specializing in
            delivering innovative and scalable digital solutions. Our expertise
            spans{" "}
            <span className="font-semibold">across multiple industries</span>,
            helping businesses optimize their technology strategies, enhance
            efficiency, and drive digital transformation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CompanyAbout;
