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
    <div className="container grid gap-10 mb-[128px]">
      {/* section title */}
      <SectionHeader
        classes="text-center"
        title="Our Services"
        subTitle="Discover our tailored swimming programs for all ages and skill levels. From beginners to advanced swimmers, we help you build confidence and master the water."
      />
      <div className="grid gap-10">
        <div className="flex flex-col lg:flex-row items-center gap-5 xl:gap-10">
          <div className="flex-1 grid gap-4">
            <h2 className="text-primary text-[32px] font-bold leading-[38px]">
              Learn to Swim (Swim for Life Program)
            </h2>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                There are 5 modules in the Lifesaving Society Swim for Life®
                program:
              </li>
              <li>
                Parent & Tot for parents and children up to 3 years of age
              </li>
              <li>
                Preschool for children 3-5 years Swimmer for children 5 years
                and older{" "}
              </li>
              <li>Adult Swimmer for people over 16 years</li>
              <li>
                Fitness Swimmer for people of any age who want to improve their
                overall physical fitness
              </li>
            </ul>
          </div>
          <Image
            width={1000}
            height={1000}
            src={aboutImg}
            alt="Services Image"
            className="flex-1 xl:w-[548px] h-[464px] rounded-lg mx-auto object-cover"
          />
        </div>

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
                Life Guarding Service
              </h2>
              <p className="text-gray leading-[25px]">
                At your next social gathering we will provide supervision of
                your pool so you can entertain without having to worry about the
                pool. Minimum 3hr booking
              </p>
              <Link
                className="text-primary font-bold leading-[25px] uppercase flex items-center gap-2"
                href="/service"
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
                Adult Lean to Swim
              </h2>
              <p className="text-gray leading-[25px]">
                No matter what your age is it’s never too late to learn how to
                swim. We work with you to help you progress and become a more
                confident swimmer no matter what level you’re at.
              </p>
              <Link
                className="text-primary font-bold leading-[25px] uppercase flex items-center gap-2"
                href="/registration"
              >
                request a quore <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
