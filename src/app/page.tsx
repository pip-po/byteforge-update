import Image from "next/image";
import Jumbotron from "./_components/Jumbotron";
import PhotoService from "./_components/PhotoService";
import CompanyAbout from "./_components/CompanyAbout";
import StatTickers from "./_components/StatTickers";
import TestimonialCarousel from "./_components/TestimonialCarousel";
import CTASection from "./_components/CTASection";

export default function Home() {
  return (
    <main className="mt-16 md:mt-20">
      <Jumbotron />
      <PhotoService />
      <CompanyAbout />
      <StatTickers />
      <TestimonialCarousel />
      <CTASection />
    </main>
  );
}
