"use client";

import {
  FacebookIcon,
  InstagramIcon,
  LucideLinkedin,
  MailCheckIcon,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  budget: string;
  country: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  const countries: string[] = [
    "United States",
    "Canada",
    "United Kingdom",
    "Australia",
    "Germany",
    "France",
    "Japan",
    "India",
  ];

  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log(data);
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="min-h-screen py-10 px-4  sm:px-6 lg:px-8 ">
        <div className="max-w-7xl mx-auto p-2 md:p-16">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden lg:grid lg:grid-cols-2">
            {/* Left Column */}
            <div
              className={`px-6 py-12 lg:px-12 bg-gradient-to-br from-[#272727]/80 to-[#272727] text-white`}
            >
              <h2 className="text-5xl font-bold mb-4">
                Let’s Build the Future, Together!
              </h2>
              <h3 className="text-3xl mb-6">
                Supercharge Your Business{" "}
                <span className="italic text-white">with ByteForge</span>
              </h3>
              <p className="mb-12 text-lg text-white">
                Got an idea? Need expert guidance? Let’s make it happen! Reach
                out now and let’s create something amazing together.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <InstagramIcon className="text-lg md:text-xl text-white" />
                  <Link
                    href="https://instagram.com/byteforge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg"
                  >
                    instagram.com/byteforge
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <FacebookIcon className="text-lg md:text-xl text-white" />
                  <Link
                    href="https://facebook.com/byteforge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg"
                  >
                    facebook.com/byteforge
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <LucideLinkedin className="text-lg md:text-xl text-white" />
                  <Link
                    href="https://www.linkedin.com/byteforge"
                    target="_blank"
                    rel="noopener noreferrer"
                    className=" text-lg"
                  >
                    linkedin.com/byteforge
                  </Link>
                </div>
                <div className="flex items-center space-x-4">
                  <MailCheckIcon className="text-lg md:text-xl text-white" />
                  <Link href="mailto:contact@byteforge.com" className="text-lg">
                    contact@byteforge.com
                  </Link>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="px-6 py-12 lg:px-12">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                {[
                  {
                    id: "name",
                    label: "Your Name",
                    type: "text",
                    validation: { required: "Name is required" },
                  },
                  {
                    id: "email",
                    label: "Email",
                    type: "email",
                    validation: {
                      required: "Email is required",
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                      },
                    },
                  },
                  {
                    id: "phone",
                    label: "Phone",
                    type: "tel",
                    validation: {
                      required: "Phone number is required",
                      pattern: {
                        value:
                          /^[+]?[0-9]{11,13}$|^[+]?[0-9]{1,4}[-\s.]?[0-9]{3,4}[-\s.]?[0-9]{4}$/,
                        message: "Invalid phone number format",
                      },
                    },
                  },
                ].map(({ id, label, type, validation }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {label}
                    </label>
                    <input
                      type={type}
                      id={id}
                      autoComplete="off"
                      {...register(id as keyof FormData, validation)}
                      className={`mt-1 block w-full rounded-md border ${
                        errors[id as keyof FormData]
                          ? "border-red-500"
                          : "border-gray-300"
                      } px-3 py-2 shadow-sm focus:border-[#272727] focus:outline-none focus:ring-1 focus:ring-[#272727]`}
                      placeholder={label}
                    />
                    {errors[id as keyof FormData] && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors[id as keyof FormData]?.message}
                      </p>
                    )}
                  </div>
                ))}

                {[
                  {
                    id: "service",
                    label: "I'm Interested in",
                    options: [
                      "Web Design",
                      "Development",
                      "Consulting",
                      "Other",
                    ],
                  },
                  // { id: "country", label: "Country", options: countries },
                ].map(({ id, label, options }) => (
                  <div key={id}>
                    <label
                      htmlFor={id}
                      className="block text-sm font-medium text-gray-700"
                    >
                      {label}
                    </label>
                    <select
                      id={id}
                      {...register(id as keyof FormData, {
                        required: `Please select ${label.toLowerCase()}`,
                      })}
                      className={`mt-1 block w-full rounded-md border ${
                        errors[id as keyof FormData]
                          ? "border-red-500"
                          : "border-gray-300"
                      } px-3 py-2 shadow-sm focus:border-[#272727] focus:outline-none focus:ring-1 focus:ring-[#272727]`}
                    >
                      <option value="">Select {label}</option>
                      {options.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                    {errors[id as keyof FormData] && (
                      <p className="mt-1 text-sm text-red-600">
                        {errors[id as keyof FormData]?.message}
                      </p>
                    )}
                  </div>
                ))}

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    {...register("message", {
                      required: "Message is required",
                      minLength: {
                        value: 20,
                        message: "Message must be at least 20 characters",
                      },
                    })}
                    className="mt-1 block w-full rounded-md border px-3 py-2 shadow-sm focus:border-[#272727] focus:outline-none focus:ring-1 focus:ring-[#272727]"
                    placeholder="Tell us about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.message.message}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className=" relative w-full py-3 bg-[#272727]/70 text-white rounded-md hover:bg-[#272727] disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                  {showSuccess && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-1 bg-green-100 text-green-700 rounded-md animate-fade-in">
                      Successfully sent!
                    </div>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
