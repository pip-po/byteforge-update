import Link from "next/link";
import {
  CheckCircle,
  DollarSign,
  ArrowRight,
  Cloud,
  Code,
  Database,
  Settings,
} from "lucide-react";
import { GridPatternDemo } from "@/app/teams/_components/JumboTeams";

const services = [
  {
    title: "Technology Consulting",
    description:
      "Strategic guidance to optimize your IT infrastructure and digital transformation.",
    features: [
      "IT strategy and roadmap development",
      "Digital transformation consulting",
      "Cloud migration and optimization",
    ],
    pricing: "Custom pricing based on project scope.",
    icon: <Settings className="text-[#272727] w-6 h-6" />,
    action: { text: "Request a Consultation", href: "/contact" },
  },
  {
    title: "Custom Software Development",
    description: "Bespoke software solutions tailored to your business needs.",
    features: [
      "Full-cycle software development",
      "Web, mobile, and enterprise applications",
      "Secure and scalable architecture",
    ],
    pricing: "Starts at $10,000 per project (varies by complexity).",
    icon: <Code className="text-[#272727] w-6 h-6" />,
    action: { text: "Get a Quote", href: "/contact" },
  },
  {
    title: "Cloud Solutions",
    description:
      "Unlock the power of the cloud with scalable and secure solutions.",
    features: [
      "Cloud strategy and implementation",
      "Serverless computing and cloud-native development",
      "Secure cloud storage solutions",
    ],
    pricing: "Subscription-based or custom pricing.",
    icon: <Cloud className="text-[#272727] w-6 h-6" />,
    action: { text: "Learn More", href: "/contact" },
  },
  {
    title: "AI & Data Analytics",
    description:
      "Harness AI and data-driven insights to make smarter business decisions.",
    features: [
      "AI-powered business intelligence",
      "Predictive analytics and machine learning",
      "Data visualization and real-time reporting",
    ],
    pricing: "Custom pricing based on data complexity.",
    icon: <Database className="text-[#272727] w-6 h-6" />,
    action: { text: "Schedule a Demo", href: "/contact" },
  },
];

export default function ServicesSection() {
  return (
    <section className="py-16 px-6 max-w-5xl mt-10 md:mt-20 mx-auto">
      <div className="absolute inset-0 -z-10">
        <GridPatternDemo />
      </div>
      <h2 className="text-5xl font-bold text-gray-900 text-center mb-6">
        Empowering Businesses with Innovative Technology
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        At ByteForge, we specialize in delivering high-quality technology
        consulting and software solutions.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-lg p-6 flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              {service.icon}
              <h3 className="text-xl font-semibold text-gray-900">
                {service.title}
              </h3>
            </div>
            <hr className="mb-3" />
            <p className="text-gray-700">{service.description}</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {service.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <CheckCircle className="text-green-500 w-5 h-5" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-medium text-gray-900 flex items-center gap-2">
              <DollarSign className="w-5 h-5 text-yellow-500" />
              {service.pricing}
            </p>
            <Link
              href={service.action.href}
              className="mt-4 text-blue-600 font-medium flex items-center gap-1 hover:underline hover:text-blue-800 transition"
            >
              {service.action.text} <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
