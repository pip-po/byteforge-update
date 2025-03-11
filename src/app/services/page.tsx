import React from "react";
import CTAServices from "./_components/CTAServices";
import TestimonialCarousel from "../_components/TestimonialCarousel";
import Pricing from "./_components/Pricing";
import ServicesSection from "./_components/ServiceSection";

const ServicesPage = () => {
  return (
    <main>
      <ServicesSection />
      <Pricing />
      <TestimonialCarousel />
      <CTAServices />
    </main>
  );
};

export default ServicesPage;
