import Image from "next/image";
import { JSX } from "react";

interface TimelineItem {
  title: string;
  content: JSX.Element;
}

interface ImageData {
  src: string;
  alt: string;
}

// Reusable ImageGrid Component
const ImageGrid: React.FC<{ images: ImageData[] }> = ({ images }) => (
  <div className="grid grid-cols-2 gap-4">
    {images.map((img, index) => (
      <Image
        key={index}
        src={img.src}
        alt={img.alt}
        width={500}
        height={500}
        className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-sm"
      />
    ))}
  </div>
);

// Timeline Data
export const data: TimelineItem[] = [
  {
    title: "2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-semibold mb-8">
          Recognized as an Industry Leader
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          Through our dedication to excellence and strategic partnerships with
          top technology firms, we gained recognition as a trusted leader in the
          consulting space. Our expertise in delivering scalable, customized
          solutions has positioned us as a go-to partner for businesses seeking
          to navigate complex technological challenges.
        </p>
        <ImageGrid
          images={[
            {
              src: "https://img.freepik.com/free-photo/social-integration-working-team_23-2149341103.jpg?t=st=1741498876~exp=1741502476~hmac=925054e69faf48a5be75c81c31f972433652a14356d229a30b3fdc9ae1451d3c&w=1800",
              alt: "startup template",
            },
            {
              src: "/discuss.png",
              alt: "startup template",
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: "2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-xl font-semibold mb-8">
          Expansion of Services & Industry Reach
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-8">
          As demand for expert technology consulting grew, we expanded our
          services to include cloud solutions, IT infrastructure, and enterprise
          software development. By working with companies across various
          industries, we helped businesses modernize their technology stacks and
          stay ahead in an evolving digital landscape.
        </p>
        <ImageGrid
          images={[
            {
              src: "https://i.pinimg.com/736x/ec/55/32/ec5532162c9a98833a1c906786cb9941.jpg",
              alt: "hero template",
            },
            {
              src: "https://i.pinimg.com/736x/00/6d/5b/006d5b790577b7b60f711f7632e28bf1.jpg",
              alt: "feature template",
            },
          ]}
        />
      </div>
    ),
  },
  {
    title: "Early 2023",
    content: (
      <div>
        <p className="text-neutral-800 font-semibold dark:text-neutral-200 text-xs md:text-xl mb-4">
          Company Founded & Vision Established
        </p>
        <p className="text-neutral-700 dark:text-neutral-300 text-xs md:text-sm mb-8">
          The company was founded with a strong mission to drive digital
          transformation across industries. From the very beginning, we focused
          on delivering innovative technology solutions that empower businesses
          to enhance efficiency and achieve sustainable growth.
        </p>
        <ImageGrid
          images={[
            {
              src: "https://images.pexels.com/photos/2678468/pexels-photo-2678468.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
              alt: "hero template",
            },
            {
              src: "https://img.freepik.com/free-photo/medium-shot-people-working-together-office_23-2149307826.jpg?t=st=1741499017~exp=1741502617~hmac=f0be0d87bdaa0116d21d6fbb20ec1e012c10ac38e552c5d2e8758f83d0eb781c&w=1800",
              alt: "feature template",
            },
          ]}
        />
      </div>
    ),
  },
];
