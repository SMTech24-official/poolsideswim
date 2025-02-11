import React from "react";
import SectionHeader from "../shared/SectionHeader";
import backyardImg from "@/assets/about/backyard.png";
import leadershipImg from "@/assets/about/leadership.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const OurServices = () => {
  return (
    <div className="container grid gap-[168px] lg:gap-20 mb-[128px]">
      {/* section title */}

      <SectionHeader
        classes="text-center"
        title="Our Services"
        subTitle="Tailored swim lessons and leadership courses for all ages and skill levels."
      />
      <div className="grid xl:grid-cols-2 gap-[168px] xl:gap-6 justify-center">
        {/* card one */}
        <div className="relative lg:w-[588px]">
          <Image
            width={588}
            height={400}
            src={backyardImg}
            alt="Intensive Swim Lessons"
            className="lg:w-[588px] lg:h-[400px] rounded-lg"
          />
          <div className="absolute right-6 -bottom-[128px] bg-white shadow-customShadowMd rounded-lg grid gap-3 lg:gap-6 p-8 lg:w-[414px]">
            <h2 className="text-[32px] font-bold leading-[38px] text-black">
              Lifeguarding Services
            </h2>
            <p className="text-gray leading-[25px]">
              Hire our certified lifeguards for safety and peace of mind.
            </p>
            <Link
              className="text-primary font-bold leading-[25px] uppercase flex items-center gap-2"
              href="/request-a-quoore"
            >
              request a quore <FaArrowRight />
            </Link>
          </div>
        </div>
        {/* card two */}
        <div className="relative lg:w-[588px]">
          <Image
            width={588}
            height={400}
            src={leadershipImg}
            alt="Intensive Swim Lessons"
            className="lg:w-[588px] lg:h-[400px] rounded-lg"
          />
          <div className="absolute right-6 -bottom-[128px] bg-white shadow-customShadowMd rounded-lg grid gap-3 lg:gap-6 p-8 lg:w-[414px]">
            <h2 className="text-[32px] font-bold leading-[38px] text-black">
              Leadership Courses
            </h2>
            <p className="text-gray leading-[25px]">
              Our Aquatic Leadership programs help you become a lifeguard or
              instructor.
            </p>
            <Link
              className="text-primary font-bold leading-[25px] uppercase flex items-center gap-2"
              href="/contact-us"
            >
              contact us <FaArrowRight />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
