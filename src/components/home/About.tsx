import Image from "next/image";
import React from "react";
import aboutImage from "@/assets/aboutImage.svg";
import shapeIcon from "@/assets/shape.svg";
import SharedButton from "../shared/SharedButton";
import Link from "next/link";

const About = () => {
  return (
    <div className="container grid xl:flex items-center gap-6 md:gap-12">
      <Image
        width={1000}
        height={1000}
        src={aboutImage}
        alt="About Image"
        className="w-[666px] md:h-[560px]"
      />
      <div className="grid gap-6 md:gap-12">
        <div className="grid gap-4">
          <p className="flex gap-2 items-center">
            <Image
              width={20}
              height={10}
              src={shapeIcon}
              alt="Icon"
              className="rounded-lg"
            />
            <h2 className="text-primary font-bold text-base leading-5 uppercase">
              About
            </h2>
          </p>
          <h2 className="text-[40px] font-bold leading-[48px]">
            About Back to Basics Swim
          </h2>
          <p className="text-base leading-5 text-gray">
            At Back to Basics Swim, we believe that everyone can become a
            confident swimmer with the right guidance. Our certified instructors
            focus on personalized coaching, water safety, and skill development
            to ensure a fun, safe, and effective learning experience. Whether
            you&apos;re a beginner or looking to refine your technique, our
            structured programs cater to all ages and skill levels.
          </p>
        </div>
        <Link href="/about">
          <SharedButton text="learn more" />
        </Link>
      </div>
    </div>
  );
};

export default About;
