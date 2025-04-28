/* eslint-disable react/no-unescaped-entities */
import React from "react";
import SectionHeader from "../shared/SectionHeader";
import backyardImg from "@/assets/about/backyard.png";
import leadershipImg from "@/assets/about/leadership.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import aboutImg from "@/assets/about/about-img.png";

const OurServices = () => {
  return (
    <div className="container px-4 sm:px-6 py-10 md:py-16 lg:mb-[128px]">
      {/* section title */}
      <SectionHeader
        classes="text-center"
        title="Our Services"
        subTitle="Discover our tailored swimming programs for all ages and skill levels. From beginners to advanced swimmers, we help you build confidence and master the water."
      />
      
      <div className="grid gap-10 md:gap-16">
        {/* First Section - Learn to Swim */}
        <div className="flex flex-col lg:flex-row items-center gap-6 xl:gap-10">
          <div className="w-full lg:flex-1 grid gap-4 order-2 lg:order-1">
            <h2 className="text-primary text-2xl sm:text-3xl md:text-[32px] font-bold leading-tight">
              Learn to Swim (Swim for Life Program)
            </h2>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
              <li>
                There are 5 modules in the Lifesaving Society Swim for Life®
                program:
              </li>
              <li>
                Parent & Tot for parents and children up to 3 years of age
              </li>
              <li>
                Preschool for children 3-5 years Swimmer for children 5 years
                and older
              </li>
              <li>Adult Swimmer for people over 16 years</li>
              <li>
                Fitness Swimmer for people of any age who want to improve their
                overall physical fitness
              </li>
            </ul>
          </div>
          <div className="w-full lg:flex-1 order-1 lg:order-2">
            <Image
              width={600}
              height={400}
              src={aboutImg}
              alt="Services Image"
              className="w-full h-auto sm:h-[350px] md:h-[400px] lg:h-[464px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Cards Section */}
        <div className="grid md:grid-cols-2 gap-6 xl:gap-10">
          {/* Card One */}
          <div className="relative">
            <div className="w-full aspect-video sm:aspect-[588/400]">
              <Image
                src={backyardImg}
                alt="Intensive Swim Lessons"
                className="w-full h-full rounded-lg object-cover"
                fill
              />
            </div>
            <div className="relative md:absolute mt-6 md:mt-0 md:right-6 md:-bottom-20 lg:-bottom-[128px] bg-white shadow-customShadowMd rounded-lg grid gap-3 lg:gap-6 p-6 lg:p-8 w-full md:w-[90%] lg:w-[414px]">
              <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold leading-tight text-black">
                Life Guarding Service
              </h2>
              <p className="text-gray text-sm sm:text-base leading-relaxed">
                At your next social gathering we will provide supervision of
                your pool so you can entertain without having to worry about the
                pool. Minimum 3hr booking
              </p>
              <Link
                className="text-primary font-bold text-sm sm:text-base leading-[25px] uppercase flex items-center gap-2"
                href="/service"
              >
                request a quote <FaArrowRight />
              </Link>
            </div>
          </div>
          
          {/* Card Two */}
          <div className="relative">
            <div className="w-full aspect-video sm:aspect-[588/400]">
              <Image
                src={leadershipImg}
                alt="Intensive Swim Lessons"
                className="w-full h-full rounded-lg object-cover"
                fill
              />
            </div>
            <div className="relative md:absolute mt-6 md:mt-0 md:right-6 md:-bottom-20 lg:-bottom-[128px] bg-white shadow-customShadowMd rounded-lg grid gap-3 lg:gap-6 p-6 lg:p-8 w-full md:w-[90%] lg:w-[414px]">
              <h2 className="text-xl sm:text-2xl lg:text-[32px] font-bold leading-tight text-black">
                Adult Learn to Swim
              </h2>
              <p className="text-gray text-sm sm:text-base leading-relaxed">
                No matter what your age is it's never too late to learn how to
                swim. We work with you to help you progress and become a more
                confident swimmer no matter what level you're at.
              </p>
              <Link
                className="text-primary font-bold text-sm sm:text-base leading-[25px] uppercase flex items-center gap-2"
                href="/registration"
              >
                request a quote <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;