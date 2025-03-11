import React from "react";
import CTAServices from "./_components/CTAServices";
import TestimonialCarousel from "../_components/TestimonialCarousel";
import Pricing from "./_components/Pricing";
import ServicesSection from "./_components/ServiceSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services - ByteForge",
  description:
    "Explore ByteForge's top-tier services, from software development to AI-driven solutions.",
};

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
