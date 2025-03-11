import Link from "next/link";
import { CheckCircle, ArrowRight } from "lucide-react";
import { useMemo } from "react";

interface Action {
  text: string;
  href: string;
}

interface PricingPlan {
  title: string;
  price: string;
  description: string;
  features: string[];
  action: Action;
}

const pricingPlans: PricingPlan[] = [
  {
    title: "Basic Plan",
    price: "$5,000",
    description:
      "Best for small businesses looking to enhance their digital presence.",
    features: ["IT Consulting", "Basic Cloud Setup", "Email Support"],
    action: { text: "Get Started", href: "/contact" },
  },
  {
    title: "Professional Plan",
    price: "$10,000",
    description:
      "Ideal for growing businesses requiring custom software solutions.",
    features: [
      "Full-cycle Software Development",
      "Cloud Optimization",
      "Priority Support",
    ],
    action: { text: "Talk to an Expert", href: "/contact" },
  },
  {
    title: "Enterprise Plan",
    price: "Custom Pricing",
    description:
      "Tailored solutions for enterprises with complex requirements.",
    features: [
      "AI & Data Analytics",
      "End-to-End Security Solutions",
      "24/7 Dedicated Support",
    ],
    action: { text: "Contact Us", href: "/contact" },
  },
];

// Define Props for PricingCard
const PricingCard: React.FC<PricingPlan> = ({
  title,
  price,
  description,
  features,
  action,
}) => (
  <div className="bg-white shadow-md rounded-lg p-6 flex flex-col">
    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
    <p className="text-gray-700 mt-2">{description}</p>
    <p className="mt-4 text-2xl font-bold text-[#272727]">{price}</p>
    <ul className="mt-4 space-y-2 text-gray-700">
      {features.map((feature: string, i: number) => (
        <li key={i} className="flex items-center gap-2">
          <CheckCircle className="text-green-500 w-5 h-5" />
          {feature}
        </li>
      ))}
    </ul>
    <Link
      href={action.href}
      className="mt-4 text-white bg-[#272727] py-2 px-4 rounded-lg text-center hover:bg-[#272727]/70 transition"
    >
      {action.text} <ArrowRight className="inline-block w-4 h-4 ml-2" />
    </Link>
  </div>
);

export default function Pricing() {
  const plans = useMemo(() => pricingPlans, []);

  return (
    <section className="py-20 px-6 max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold text-gray-900 text-center mb-6">
        Pricing Plans
      </h2>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Choose a plan that fits your business needs and scale with confidence.
      </p>
      <div className="grid md:grid-cols-3 gap-6 mt-10">
        {plans.map((plan, index) => (
          <PricingCard key={index} {...plan} />
        ))}
      </div>
    </section>
  );
}
