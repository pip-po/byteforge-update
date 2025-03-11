import { Metadata } from "next";
import { Suspense } from "react";
import { CoreTeam } from "./_components/CoreTeam";
import TeamCard from "./_components/TeamCard";
import Teams from "./_components/JumboTeams";

export const metadata: Metadata = {
  title: "Meet the Team - ByteForge",
  description:
    "Get to know the brilliant minds behind ByteForge, dedicated to innovation and excellence.",
};

const Teamspage = () => {
  return (
    <section className="container m-auto p-4">
      <div className="mt-16">
        <Teams />
        <div className="bg-[#9b9b9b]/10 mt-10 rounded-lg shadow-xl border mx-0 md:mx-8 p-2">
          <div className="mx-3 md:mx-16">
            <h2 className="font-bold mt-10  text-[#272727] p-2 text-xl lg:text-6xl lg:leading-tight">
              Leadership Team
            </h2>
            <p className="text-sm lg:text-base ml-2 mt-4 mx-auto text-neutral-500 font-normal dark:text-neutral-300">
              Our leadership team consists of experienced professionals
              dedicated to driving innovation and excellence in the tech
              industry.
            </p>
          </div>
          <Suspense>
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center items-center mx-5 md:mx-16 gap-5 my-10 ">
              <TeamCard
                title="CEO"
                description="Leads the company and defines strategic direction."
              />
              <TeamCard
                title="CTO"
                description="Oversees technology strategy and product development."
              />
              <TeamCard
                title="CMO"
                description="Responsible for marketing strategy and brand growth."
              />
            </div>
          </Suspense>
        </div>
        <CoreTeam />
      </div>
    </section>
  );
};

export default Teamspage;
