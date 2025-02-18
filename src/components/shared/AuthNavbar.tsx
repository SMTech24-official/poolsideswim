"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@/assets/logo.svg";
import Link from "next/link";
import SharedButton from "./SharedButton";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";
import { FaChevronDown } from "react-icons/fa6";
import { removeUser } from "@/redux/slice/userSlice";
import { useRouter } from "next/navigation";

const AuthNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const user = useSelector((state: RootState) => state?.user);
  const isLoggenIn = !!user?.user?.id;
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = () => {
    dispatch(removeUser()); // Dispatch logout action
    setDropdownOpen(false); // Close dropdown
    router.push("/login");
  };

  return (
    <div className="sticky top-0 w-full z-10 bg-primary">
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
            href="/about-us"
            className="text-base font-bold leading-[25px] text-white"
          >
            About
          </Link>
          {/* <Link
            href="/programs"
            className="text-base font-bold leading-[25px] text-white"
          >
            Programs
          </Link> */}
          {/* <Link
            href="/pricing"
            className="text-base font-bold leading-[25px] text-white"
          >
            Pricing
          </Link> */}
          {/* <Link
            href="/blog"
            className="text-base font-bold leading-[25px] text-white"
          >
            Blog
          </Link> */}
          {/* <Link
            href="/career"
            className="text-base font-bold leading-[25px] text-white"
          >
            Career
          </Link> */}
          <Link
            href="/contact-us"
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
          {isLoggenIn ? (
            <div className="flex items-center gap-4">
              {/* Display user name */}
              <p className="text-white">
                {user?.user?.firstName} {user?.user?.lastName}
              </p>

              {/* Icon for dropdown */}
              <div className="relative">
                <FaChevronDown
                  className="text-white cursor-pointer"
                  onClick={() => setDropdownOpen(!isDropdownOpen)}
                />
                {isDropdownOpen && (
                  <div className="absolute right-0 bg-white text-black py-2 px-4 mt-2 rounded-md shadow-lg grid gap-2">
                    <Link
                      href="/profile"
                      className="text-black font-medium text-lg"
                    >
                      Profile
                    </Link>
                    {/* Logout button */}
                    <SharedButton
                      onClick={handleLogout}
                      classes="w-full text-left text-xs font-medium hover:bg-gray-200 rounded-full px-4 py-1 text-nowrap"
                      text="Log out"
                    />
                  </div>
                )}
              </div>
            </div>
          ) : (
            // If not logged in, show login button
            <Link href="/login">
              <SharedButton
                classes="bg-white hover:bg-white/95 !text-black py-[9px]"
                text="Log in"
              />
            </Link>
          )}
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
          href="/about-us"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          About
        </Link>
        {/* <Link
          href="/programs"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Programs
        </Link> */}
        {/* <Link
          href="/pricing"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Pricing
        </Link> */}
        {/* <Link
          href="/blog"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Blog
        </Link> */}
        {/* <Link
          href="/career"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Career
        </Link> */}
        <Link
          href="/contact-us"
          className="block py-2 text-base font-bold leading-[25px]"
          onClick={() => setIsMenuOpen(false)}
        >
          Contact
        </Link>
      </div>
    </div>
  );
};

export default AuthNavbar;
