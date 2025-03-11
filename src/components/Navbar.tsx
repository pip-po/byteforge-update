"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState, useCallback } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <nav
      className={`fixed left-0 top-0 md:top-4 z-50 w-full min-h-[60px] rounded-md transition-all duration-300 ${
        isScrolled ? "backdrop-blur-lg bg-white/70 shadow-md" : "bg-white"
      }`}
    >
      <div className="container relative mx-auto p-4 flex items-center">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/ByteForge.webp"
            alt="ByteForge Logo"
            width={130}
            height={70}
            priority
            style={{ objectFit: "contain", width: "auto", height: "auto" }}
          />
        </Link>

        {/* Menu Navigasi (Desktop) */}
        <div className="ml-auto hidden md:flex items-center space-x-6">
          {["Home", "About", "Services", "Teams"].map((item) => (
            <Link
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="hover:text-black/70 hover:underline transition-all duration-200"
            >
              {item}
            </Link>
          ))}
          <Link href="/contact">
            <Button className="bg-[#272727] hover:bg-[#272727]/80 transition-all duration-300">
              Contact Us
            </Button>
          </Link>
        </div>

        {/* Menu Navigasi (Mobile) */}
        <div className="ml-auto md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                aria-label="Open menu"
                className="p-2 border rounded-md bg-white text-black hover:bg-gray-50 transition-all"
              >
                ☰
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>
                <Link href="/">Home</Link>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {["About", "Services", "Teams", "Contact"].map((item) => (
                <DropdownMenuItem key={item}>
                  <Link href={`/${item.toLowerCase()}`}>{item}</Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
