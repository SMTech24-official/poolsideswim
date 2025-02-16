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
        <div className="grid xl:flex items-center gap-5 xl:gap-10">
          <div className="grid gap-4">
            <h2 className="text-primary text-[32px] font-bold leading-[38px]">
              Learn to Swim
            </h2>
            <p className="text-gray text-base leading-[25px]">
              Swimming is more than just fun—it’s a vital life skill that
              ensures safety, fitness, and confidence in the water. Whether
              you&apos;re a beginner or want to improve your strokes, our Learn
              to Swim program offers structured, step-by-step lessons in a
              supportive environment. With expert guidance, you’ll gain water
              confidence, master essential techniques, and enjoy swimming with
              ease. <br /> Our certified instructors make learning fun, safe,
              and stress-free. From floating to freestyle, we help you build
              skills at your own pace. Swimming improves strength, endurance,
              and overall health. Join us today and make a splash on your
              swimming journey
            </p>
          </div>
          <Image
            width={1000}
            height={1000}
            src={aboutImg}
            alt="Services Image"
            className="xl:w-[548px] h-[464px] rounded-lg mx-auto object-cover"
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
                Lifeguarding Services
              </h2>
              <p className="text-gray leading-[25px]">
                Hire our certified lifeguards for safety and peace of mind.
              </p>
              <Link
                className="text-primary font-bold leading-[25px] uppercase flex items-center gap-2"
                href="/lifeguard-services-form"
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
                Adult Classes
              </h2>
              <p className="text-gray leading-[25px]">
                It&apos;s never too late to learn how to swim. No matter what
                your age or ability let Poolside Swimming help you become the
                swimmer you always wanted to be
              </p>
              <Link
                className="text-primary font-bold leading-[25px] uppercase flex items-center gap-2"
                href="/class-registration"
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
