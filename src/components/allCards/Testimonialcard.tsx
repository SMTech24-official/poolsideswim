"use client";

import Image from "next/image";
import React from "react";
import quoteImg from "@/assets/testimonial/quote.svg";
import imgOne from "@/assets/gallery-1.svg";
import StarRatingComponent from "react-star-rating-component";

const Testimonialcard = () => {
  return (
    <div className="shadow-customShadowMd rounded-lg w-[372px] h-[264px] relative">
      <div className="absolute -top-8 right-0 left-0 bg-white w-[64px] h-[64px] rounded-full place-content-center justify-center flex mx-auto">
        <Image width={32} height={37} src={quoteImg} alt="Quote" className="" />
      </div>
      <p className="text-gray text-base leading-[25px] px-5 py-[67px]">
        &quot;So glad Back to Basics has a Facebook page! Thanks for teaching my
        daughter in her early swimming days. She&apos;s now swimming
        competitively, and I owe her success to your great instruction “
      </p>
      <div className="absolute -bottom-[87px] right-0 left-0 mx-auto flex justify-center">
        <div className="grid justify-center">
          <div className="bg-white p-1 rounded-full mb-2 inline-block mx-auto">
            <Image
              width={68}
              height={68}
              src={imgOne}
              alt="Client Image"
              className="rounded-full w-[68px] h-[68px] object-cover flex justify-center"
            />
          </div>
          <h2 className="text-base text-black font-bold leading-5">
            Liam Carter
          </h2>
          {/* ratings */}
          <div className="flex items-center justify-center">
            <StarRatingComponent
              name="rate1"
              starCount={5}
              value={3}
              editing={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonialcard;
