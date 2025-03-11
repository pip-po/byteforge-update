"use client";

import { ChangeEvent, FormEvent, useState } from "react";

import {
  GithubIcon,
  LinkedinIcon,
  MailCheckIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

const Footer: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isValid, setIsValid] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);

  const validateEmail = (email: string): boolean => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    setIsValid(validateEmail(value));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateEmail(email)) return;

    setIsLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setShowSuccess(true);
      setEmail("");
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (error) {
      console.error("Subscription failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-[#272727] pt-6 pb-6">
      {/* <footer className="bg-gradient-to-b from-white via-gray-50 to-gray-100 pt-6 pb-6"> */}
      <div id="footer" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Connected
            </h3>
            <p className="text-white mb-6">
              Get the latest updates and insights delivered straight to your
              inbox
            </p>
            <form onSubmit={handleSubmit} className="relative">
              <div className="flex items-center">
                <div className="relative flex-grow">
                  <input
                    id="email"
                    type="email"
                    value={email}
                    onChange={handleEmailChange}
                    autoComplete="off"
                    className={`w-full px-4 py-3 pl-10 text-white rounded-l-lg border ${
                      !isValid && email ? "border-red-500" : "border-gray-300"
                    } focus:outline-none focus:ring-2 focus:ring-[#272727]`}
                    aria-label="Email address"
                  />
                  <MailCheckIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white h-5 w-5" />
                </div>
                <button
                  type="submit"
                  disabled={!isValid || isLoading || !email}
                  className={`px-6 py-3 rounded-r-lg font-semibold text-white ${
                    isValid && email
                      ? "bg-[#ffffff]/80 hover:bg-[#ffffff]"
                      : "bg-gray-400"
                  } transition duration-200 focus:outline-none hover:text-[#272727] focus:ring-2 focus:ring-offset-2 focus:ring-[#272727] disabled:opacity-50`}
                >
                  {isLoading ? "Subscribing..." : "Subscribe"}
                </button>
              </div>
              {!isValid && email && (
                <p className="mt-2 text-red-500 text-sm">
                  Please enter a valid email address
                </p>
              )}
              {showSuccess && (
                <div className="absolute top-full left-0 mt-2 px-4 py-2 bg-green-100 text-green-700 rounded-md animate-fade-in">
                  Successfully subscribed!
                </div>
              )}
            </form>
          </div>
          <div className="pl-0 md:pl-6 lg:pl-12">
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-white hover:text-[#ffffff]/30 transition duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-white hover:text-[#ffffff]/30 transition duration-200"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/service"
                  className="text-white hover:text-[#ffffff]/30 transition duration-200"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-white hover:text-[#ffffff]/30 transition duration-200"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white hover:text-[#ffffff]/30 transition duration-200"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="pl-0 md:pl-6 lg:pl-12">
            <h4 className="text-lg font-semibold text-white mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-[#ffffff]/30 transition duration-200"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-[#ffffff]/30 transition duration-200"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="text-white hover:text-[#ffffff]/30 transition duration-200"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-4 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white text-sm">
              © {new Date().getFullYear()} ByteForge. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-[#ffffff]/30 transition duration-200"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ffffff]/30 transition duration-200"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-[#ffffff]/30 transition duration-200"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
