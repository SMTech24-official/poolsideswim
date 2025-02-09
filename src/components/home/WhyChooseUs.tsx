import React from "react";
import SectionHeader from "../shared/SectionHeader";
import Image from "next/image";
import badgeIcon from "@/assets/why-choose-us/badge.svg";

const WhyChooseUs = () => {
  return (
    <div className="container">
      {/* section header */}

      <SectionHeader
        classes="text-center"
        title="Why Choose Us"
        subTitle="Experience the Best in Swimming Education – Safe, Professional, and Tailored Just for You"
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10">
        {/* card one */}
        <div className="shadow-customShadow hover:shadow-customShadowMd p-5 rounded-lg transition-all duration-300">
          <div className="bg-primary p-2 rounded inline-block">
            <Image src={badgeIcon} alt="Badge" />
          </div>
          <h2 className="text-xl font-semibold leading-[28px] text-black py-2">
            Certified swimming instructors
          </h2>
          <div className="bg-primary w-[97px] h-[1px] mb-6"></div>
          <p className="text-gray text-base leading-[25px]">
            Expert Guidance from Certified Professionals for Safe & Effective
            Learning
          </p>
        </div>
        {/* card two */}
        <div className="shadow-customShadow hover:shadow-customShadowMd p-5 rounded-lg transition-all duration-300">
          <div className="bg-primary p-2 rounded inline-block">
            <Image src={badgeIcon} alt="Badge" />
          </div>
          <h2 className="text-xl font-semibold leading-[28px] text-black py-2">
            Personalized training
          </h2>
          <div className="bg-primary w-[97px] h-[1px] mb-6"></div>
          <p className="text-gray text-base leading-[25px]">
            Customized Lessons Tailored to Your Skill Level and Goals
          </p>
        </div>
        <div className="shadow-customShadow hover:shadow-customShadowMd p-5 rounded-lg transition-all duration-300">
          <div className="bg-primary p-2 rounded inline-block">
            <Image src={badgeIcon} alt="Badge" />
          </div>
          <h2 className="text-xl font-semibold leading-[28px] text-black py-2">
            Safe & Hygienic Pool
          </h2>
          <div className="bg-primary w-[97px] h-[1px] mb-6"></div>
          <p className="text-gray text-base leading-[25px]">
            Crystal-Clear Waters with Top-Tier Safety & Hygiene Standards
          </p>
        </div>
        <div className="shadow-customShadow hover:shadow-customShadowMd p-5 rounded-lg transition-all duration-300">
          <div className="bg-primary p-2 rounded inline-block">
            <Image src={badgeIcon} alt="Badge" />
          </div>
          <h2 className="text-xl font-semibold leading-[28px] text-black py-2">
            Flexible Scheduling
          </h2>
          <div className="bg-primary w-[97px] h-[1px] mb-6"></div>
          <p className="text-gray text-base leading-[25px]">
            Swim at Your Convenience with Easy & Flexible Scheduling Options
          </p>
        </div>
        <div className="shadow-customShadow hover:shadow-customShadowMd p-5 rounded-lg transition-all duration-300">
          <div className="bg-primary p-2 rounded inline-block">
            <Image src={badgeIcon} alt="Badge" />
          </div>
          <h2 className="text-xl font-semibold leading-[28px] text-black py-2">
            Fun & Engaging Lessons
          </h2>
          <div className="bg-primary w-[97px] h-[1px] mb-6"></div>
          <p className="text-gray text-base leading-[25px]">
            Enjoyable and Interactive Lessons That Make Learning to Swim
            Exciting
          </p>
        </div>
        <div className="shadow-customShadow hover:shadow-customShadowMd p-5 rounded-lg transition-all duration-300">
          <div className="bg-primary p-2 rounded inline-block">
            <Image src={badgeIcon} alt="Badge" />
          </div>
          <h2 className="text-xl font-semibold leading-[28px] text-black py-2">
            Proven Track Record
          </h2>
          <div className="bg-primary w-[97px] h-[1px] mb-6"></div>
          <p className="text-gray text-base leading-[25px]">
            Trusted by Hundreds, Delivering Excellence in Every Swim Lesson
          </p>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
