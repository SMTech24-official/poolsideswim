import React from "react";
import galleryImgOne from "@/assets/gallery-1.svg";
import galleryImgTwo from "@/assets/gallery-2.svg";
import SectionHeader from "../shared/SectionHeader";
import Image from "next/image";

const OurGallery = () => {
  return (
    <div className="container mt-[120px] lg:mt-[149px]">
      {/* section header */}

      <SectionHeader
        classes="text-center"
        title="Our gallery"
        subTitle="Tailored swim lessons and leadership courses for all ages and skill levels."
      />
      <div className="mt-10 grid xl:grid-cols-3 gap-3 md:gap-6 justify-center">
        <Image
          width={384}
          height={500}
          src={galleryImgOne}
          className="w-[384px] h-[500px] rounded-lg"
          alt="Gallery"
        />
        <div className="grid gap-3 md:gap-6">
          <Image
            height={100}
            src={galleryImgTwo}
            className="w-auto h-[239px]"
            alt="Gallery"
          />
          <Image
            height={100}
            src={galleryImgTwo}
            className="w-auto h-[239px]"
            alt="Gallery"
          />
        </div>
        <Image
          width={384}
          height={500}
          src={galleryImgOne}
          className="w-[384px] h-[500px] rounded-lg"
          alt="Gallery"
        />
      </div>
    </div>
  );
};

export default OurGallery;
