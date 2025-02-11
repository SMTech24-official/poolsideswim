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
      <div className="container">
        <div className="text-white absolute top-0 bottom-0 grid place-content-center">
          <h1 className="text-5xl lg:text-[64px] font-bold xl:leading-[76px] mb-4">
            Swimming made easy, fun, <br /> and convenient right in your <br />{" "}
            own pool or ours.
          </h1>
          <p className="text-base leading-[25px] mb-12">
            Professional Swimming Lessons designed for all ages and skill
            levels. Swimming Lessons made convenient.
          </p>
          <SharedButton text="Book Your Lessons" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
