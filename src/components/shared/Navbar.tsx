"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Logo from "../ui/Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 50);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="z-50">
          <Logo />
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-8">
          <Link
            href="/"
            className="text-base font-semibold text-white hover:text-blue-200 transition-colors"
          >
            Home
          </Link>
          <Link
            href="/faq"
            className="text-base font-semibold text-white hover:text-blue-200 transition-colors"
          >
            FAQ
          </Link>
          <Link
            href="/contact-us"
            className="text-base font-semibold text-white hover:text-blue-200 transition-colors"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white focus:outline-none z-50"
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 left-0 w-full h-screen bg-primary transition-all duration-300 ease-in-out flex flex-col items-center justify-center ${
            isMenuOpen ? "translate-y-0" : "-translate-y-full"
          }`}
          style={{ paddingTop: "5rem" }} // Adjust based on your header height
        >
          <Link
            href="/"
            className="py-4 text-xl font-semibold text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/faq"
            className="py-4 text-xl font-semibold text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            FAQ
          </Link>
          <Link
            href="/contact-us"
            className="py-4 text-xl font-semibold text-white hover:text-blue-200 transition-colors"
            onClick={() => setIsMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;