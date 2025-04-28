import React from "react";
import bannerImg from "@/assets/banner.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="relative">
      <Image
        width={1000}
        height={1000}
        src={bannerImg}
        alt="Banner Image"
        className="w-full md:h-screen h-[30rem] object-cover"
      />
      <div className="container">
        <div className="text-white absolute top-24 md:top-0 bottom-0 grid place-content-center">
          <h1 className="text-3xl lg:text-[64px] font-bold lg:leading-[70px] xl:leading-[76px] mb-4">
            Swimming made easy, fun, <br /> and convenient right in your <br />{" "}
            own pool or ours.
          </h1>
          <p className="text-base leading-[25px] mb-12">
            Professional Swimming Lessons designed for all ages and skill
            levels. Swimming Lessons made convenient.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
