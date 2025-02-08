import React from "react";
import bannerImg from "@/assets/banner.svg";
import Image from "next/image";
import SharedButton from "../shared/SharedButton";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        width={1000}
        height={1000}
        src={bannerImg}
        alt="Banner Image"
        className="w-full h-screen object-cover"
      />
      <div className="container text-white absolute top-0 bottom-0 grid place-content-center">
        <h1 className="text-5xl lg:text-[64px] font-bold xl:leading-[76px] mb-4">
          Swim with Confidence, <br /> Learn with Experts
        </h1>
        <p className="text-base leading-[25px] mb-12">
          Join our professional swimming lessons designed for all ages and skill
          levels. Safe, fun, and effective learning starts here
        </p>
        <SharedButton classes="" text="Book Your Lessons" />
      </div>
    </div>
  );
};

export default Banner;
