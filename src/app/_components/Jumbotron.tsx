import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Jumbotron = () => {
  return (
    <div className="flex flex-col items-center py-4 w-full bg-[#272727]">
      {/* Preset fixed height to prevent layout shift */}
      <div className="min-h-[240px] md:min-h-[300px] lg:min-h-[370px] flex items-center justify-center">
        <h1 className="text-4xl md:text-4xl lg:text-7xl font-bold max-w-7xl mx-auto text-center relative z-20 py:6 md:py-10 bg-clip-text text-[#ffffff] dark:from-neutral-800 dark:via-white dark:to-white">
          Empowering your businesses
          <br />
          with cutting-edge technology
          <br />
          solutions
        </h1>
      </div>

      {/* Fixed height for buttons container */}
      <div className="flex relative justify-center items-center gap-2 mt-2 py-4 z-10 min-h-[60px]">
        <Link href="/services" scroll={false}>
          <Button className="bg-[#ffffff]  text-[#272727] border border-transparent hover:border-[#272727] hover:bg-transparent hover:text-[#ffffff] font-medium pointer-events-auto p-4">
            Start Now
          </Button>
        </Link>
        <Link href="/#why-choose-us" scroll={true}>
          <Button className="bg-transparent  border hover:pointer text-[#ffffff] border-[#272727] hover:text-[#ffffff] hover:bg-[#272727]">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Jumbotron;
