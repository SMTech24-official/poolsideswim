import React from "react";
import SectionHeader from "../shared/SectionHeader";
import intensiveImg from "@/assets/about/weekly.png";
import backyardImg from "@/assets/about/backyard.png";
import lifeguardImg from "@/assets/about/lifeguard.png";
import leadershipImg from "@/assets/about/leadership.png";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const OurPrograms = () => {
  return (
    <div className="container grid gap-[168px] lg:gap-20 mb-[128px]">
      {/* section title */}

      <SectionHeader
        classes="text-center"
        title="Our Programs"
        subTitle="Tailored swim lessons and leadership courses for all ages and skill levels."
      />
      {/* main card header */}
      {/* <div className="relative lg:w-[791px] ">
          <Image
            width={791}
            height={400}
            src={weeklyImg}
            alt="Weekly Image"
            className="lg:w-[791px] h-[400px] object-cover rounded-lg"
          />
          <div className="absolute right-6 lg:right-0 -bottom-[128px] lg:-bottom-10 bg-white shadow-customShadowMd rounded-lg grid gap-3 lg:gap-6 p-8 lg:w-[414px]">
            <h2 className="text-[32px] font-bold leading-[38px] text-black">
              Weekly Swimming Lessons
            </h2>
            <p className="text-gray leading-[25px]">
              We offer year-round swim lessons for all ages, with private and
              semi-private options
            </p>
            <Link
              className="text-primary font-bold leading-[25px] uppercase flex items-center gap-2"
              href="/"
            >
              Learn More <FaArrowRight />
            </Link>
          </div>
        </div> */}
      <div className="grid xl:grid-cols-2 gap-[168px] lg:gap-6 justify-center">
        <div className="grid gap-[168px]">
          {/* card one */}
          <div className="relative lg:w-[588px]">
            <Image
              width={588}
              height={400}
              src={lifeguardImg}
              alt="Intensive Swim Lessons"
              className="lg:w-[588px] lg:h-[400px] rounded-lg"
            />
            <div className="absolute right-6 -bottom-[128px] bg-white shadow-customShadowMd rounded-lg grid gap-3 lg:gap-6 p-8 lg:w-[414px]">
              <h2 className="text-[32px] font-bold leading-[38px] text-black">
                Backyard Swim Lessons
              </h2>
              <p className="text-gray leading-[25px]">
                We bring swim lessons to your home or backyard pool.
              </p>
              <Link
                className="text-primary font-bold leading-[25px] uppercase flex items-center gap-2"
                href="/"
              >
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
          {/* card three */}
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
        </div>
        <div className="grid gap-[168px]">
          {/* card two */}
          <div className="relative lg:w-[588px]">
            <Image
              width={588}
              height={400}
              src={intensiveImg}
              alt="Intensive Swim Lessons"
              className="lg:w-[588px] lg:h-[400px] rounded-lg"
            />
            <div className="absolute right-6 -bottom-[128px] bg-white shadow-customShadowMd rounded-lg grid gap-3 lg:gap-6 p-8 lg:w-[414px]">
              <h2 className="text-[32px] font-bold leading-[38px] text-black">
                Weekly Swimming Lessons
              </h2>
              <p className="text-gray leading-[25px]">
                We offer swimming lessons in summer in comfort or you own pool
                or our. Classes can be offered in private or semi private
                format.
              </p>
              <Link
                className="text-primary font-bold leading-[25px] uppercase flex items-center gap-2"
                href="/"
              >
                Learn More <FaArrowRight />
              </Link>
            </div>
          </div>
          {/* card four */}
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
    </div>
  );
};

export default OurPrograms;
