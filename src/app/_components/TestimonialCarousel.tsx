import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

const testimonials = [
  {
    name: "Jennie Kim",
    description:
      "The service provided was exceptional! The team was very professional and exceeded my expectations. Their attention to detail and dedication to customer satisfaction made the entire experience seamless. I highly recommend them.",
    role: "CEO at XCompany",
    src: "https://i.pinimg.com/736x/7f/1b/9b/7f1b9bffb5e95e565472c28235162628.jpg",
  },
  {
    name: "Lisa Manoban",
    description:
      "Working with this company was an absolute pleasure. They delivered high-quality work on time and were always responsive to our needs. Their ability to adapt to our specific requirements truly set them apart.",
    role: "CTO at YCompany",
    src: "https://i.pinimg.com/736x/3d/6d/e8/3d6de8ac9a02e0cb66e28c903c41cd51.jpg",
  },
  {
    name: "Jisoo Kim",
    description:
      "Their attention to detail and commitment to excellence is truly impressive. The team went above and beyond to ensure we were completely satisfied with the results. I am extremely happy with their work and will definitely collaborate again.",
    role: "Designer at ZCompany",
    src: "https://i.pinimg.com/736x/18/f6/50/18f650fd60b986dfd8d0b692b8ec5fbb.jpg",
  },
  {
    name: "Rose",
    description:
      "The team's dedication and precision are outstanding. They put in extra effort to deliver exceptional results, making sure we were fully satisfied. I couldn't be happier with their work and will gladly work with them again.",
    role: "CMO at ACompany",
    src: "https://i.pinimg.com/736x/3a/f1/c2/3af1c2013a2a3e1aeaf9ff5f39bdb46f.jpg",
  },
];

const TestimonialCarousel = () => {
  return (
    <section className="mt-8 py-10 md:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 md:mb-12">
          <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#272727] text-center font-bold">
            What Clients Say About Us?
          </h3>
        </div>

        <div className="max-w-4xl mx-auto">
          <Carousel className="rounded-md border border-black/20 mx-16 shadow-lg">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-4 sm:p-6 md:p-8 flex flex-col items-center">
                    {/* Image placement at the top for mobile, better visual hierarchy */}
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full overflow-hidden mb-4 border-2 border-gray-200">
                      <Image
                        src={testimonial.src}
                        alt={`${testimonial.name}`}
                        width={96}
                        height={96}
                        className="w-full h-full object-cover"
                        priority={index === 0} // Only prioritize the first image
                      />
                    </div>

                    <h4 className="font-bold text-xl sm:text-2xl mb-2">
                      {testimonial.name}
                    </h4>

                    <p className="font-medium text-sm sm:text-base text-gray-600 italic mb-4">
                      {testimonial.role}
                    </p>

                    <div className="text-center">
                      <p className="text-sm sm:text-base leading-relaxed">
                        "{testimonial.description}"
                      </p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="absolute left-2 md:-left-2 top-1/2 -translate-y-1/2">
              <CarouselPrevious className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>

            <div className="absolute right-2 md:-right-2 top-1/2 -translate-y-1/2">
              <CarouselNext className="h-8 w-8 sm:h-10 sm:w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
