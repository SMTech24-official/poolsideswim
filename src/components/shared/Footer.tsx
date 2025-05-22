import React from "react";
import Image from "next/image";
import facebookIcon from "@/assets/footer/facebookIcon.svg";
import instaIcon from "@/assets/footer/instaIcon.svg";
import Logo from "../ui/Logo";

const Footer = () => {
  return (
    <div className="bg-blue pt-20 mt-[120px]">
      <div className="container text-white">
        <div className="grid xl:flex items-start justify-between pb-6 gap-10 xl:gap-0">
          <div>
            <div className=" mb-6">
              <Logo />
            </div>
            <p className="mb-6 text-base leading-[25px]">
              Build Confidence & Skills with Our Expert Poolside Swim Lessons!
            </p>
            <div className="grid gap-4">
              <h2 className="text-xl font-semibold leading-7">Follow us</h2>
              <div className="flex items-center gap-4">
                <Image
                  width={24}
                  height={24}
                  src={facebookIcon}
                  alt="Facebook Icon"
                  className="w-6 h-6"
                />
                <Image
                  width={24}
                  height={24}
                  src={instaIcon}
                  alt="Instagram Icon"
                  className="w-6 h-6"
                />
              </div>
            </div>
          </div>
          <div className="grid lg:flex gap-10 lg:gap-16 items-start">
            <div className="grid gap-[30px]">
              <h2 className="text-yellow text-lg font-semibold leading-7">
                Quick links
              </h2>
              <div className="grid gap-2">
                <a href="#about-us" className="text-base leading-[25px]">
                  About Us
                </a>
                <a href="#course" className="text-base leading-[25px]">
                  Pricing
                </a>
                <a
                  href="#red-cross-program"
                  className="text-base leading-[25px]"
                >
                  Customer Service
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* border */}
        <div className="border "></div>
        {/* copy right */}
        <p className="text-base leading-[25px] text-center mt-2 pb-4">
          © 2025 Poolside Swimming. Design by ThemeWarrior
        </p>
      </div>
    </div>
  );
};

export default Footer;
