import { StaticContainer } from "@/components/ui/StaticContainer";
import Image from "next/image";

const PhotoService = () => {
  return (
    <section className="container mx-auto">
      <StaticContainer
        titleComponent={
          <>
            <h2 className="text-4xl font-semibold mt-10 text-[#272727] dark:text-white">
              With Us, We Build the <br />
              <span className="text-4xl md:text-[5rem] mb-5 font-bold leading-none">
                Future of Your Business
              </span>
            </h2>
          </>
        }
      >
        <Image
          src={`/homepage.webp`}
          alt="hero"
          height={720}
          width={1400}
          priority
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        />
      </StaticContainer>
    </section>
  );
};

export default PhotoService;
