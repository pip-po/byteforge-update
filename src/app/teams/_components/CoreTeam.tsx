import { HoverEffect } from "@/components/ui/card-hover-effect";
import {
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Cloudy,
  LaptopMinimalCheck,
} from "lucide-react";
export function CoreTeam() {
  return (
    <div className="container mx-auto p-4">
      <div className="mx-3 md:mx-24">
        <hr />
        <div className="mx-5 md:mx-0 text-right">
          <h3 className="font-bold mt-10 text-[#272727] text-xl lg:text-6xl lg:leading-tight">
            Core Team
          </h3>
          <p className="text-sm lg:text-base mt-4 text-neutral-500 font-normal dark:text-neutral-300">
            The core team is made up of highly skilled individuals who
            collaborate to bring ByteForge’s vision to life.
          </p>
        </div>
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}
export const projects = [
  {
    name: "Software Engineers ",
    icon: <LaptopMinimalCheck />,
    role: "CEO",
    description:
      "Building high-performance applications with modern technologies.",
    image:
      "https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "AI & Data Analysts  ",
    icon: <ChartNoAxesCombined />,
    role: "CFO",
    description: " Turning raw data into actionable insights for businesses.",
    image:
      "https://images.pexels.com/photos/5716032/pexels-photo-5716032.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Cloud Specialists",
    icon: <Cloudy />,
    role: "CMO",
    description: "Optimizing cloud infrastructure for seamless scalability.",
    image:
      "https://images.pexels.com/photos/1595385/pexels-photo-1595385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  },
  {
    name: "Business Consultants",
    icon: <BriefcaseBusiness />,
    role: "CMO",
    description:
      "Aligning technology with business objectives to drive growth.",
    image:
      "https://img.freepik.com/free-photo/bussiness-people-working-team-office_1303-22863.jpg?t=st=1741491430~exp=1741495030~hmac=a8db5bb62a7b66ff6a20f860cf97734cf32b8b92542fef8c71a0b02807baa3d3&w=1800",
  },
];
