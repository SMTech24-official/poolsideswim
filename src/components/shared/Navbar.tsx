"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import SharedButton from "./SharedButton";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full z-10 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="container py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <Image
            width={118}
            height={48}
            src={logo}
            alt="Logo"
            className="w-[118px] h-[48px]"
          />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-10">
          <Link
            href="/"
            className="text-base font-bold leading-[25px] text-white"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-base font-bold leading-[25px] text-white"
          >
            About
          </Link>
          <Link
            href="/programs"
            className="text-base font-bold leading-[25px] text-white"
          >
            Programs
          </Link>
          <Link
            href="/pricing"
            className="text-base font-bold leading-[25px] text-white"
          >
            Pricing
          </Link>
          <Link
            href="/blog"
            className="text-base font-bold leading-[25px] text-white"
          >
            Blog
          </Link>
          <Link
            href="/career"
            className="text-base font-bold leading-[25px] text-white"
          >
            Career
          </Link>
          <Link
            href="/contact"
            className="text-base font-bold leading-[25px] text-white"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMenu} className="text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Login Button (always visible) */}
        <div>
          <Link href="/login">
            <SharedButton
              classes="bg-white hover:bg-white/95 !text-black py-[9px]"
              text="Log in"
            />
          </Link>
        </div>
      </div>

      {/* Mobile Menu (toggle visibility based on state) */}
      <div
        className={`lg:hidden ${
          isMenuOpen ? "block" : "hidden"
        } bg-primary text-white p-5`}
      >
        <Link
          href="/"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Home
        </Link>
        <Link
          href="/about"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        <Link
          href="/programs"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Programs
        </Link>
        <Link
          href="/pricing"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Pricing
        </Link>
        <Link
          href="/blog"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </Link>
        <Link
          href="/career"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Career
        </Link>
        <Link
          href="/contact"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
