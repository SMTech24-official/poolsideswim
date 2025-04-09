"use client";

import Image from "next/image";
import React from "react";
import quoteImg from "@/assets/testimonial/quote.svg";
import ReactStars from "react-stars";
import { ReviewType } from "@/app/types/Review";

interface ReviewProps {
  review: ReviewType;
}

const Testimonialcard = ({ review }: ReviewProps) => {
  return (
    <div className="shadow-customShadowMd mt-24 rounded-lg lg:w-[372px] h-[264px] relative mx-auto">
      <div className="absolute -top-8 right-0 left-0 bg-white w-[64px] h-[64px] rounded-full place-content-center justify-center flex mx-auto">
        <Image width={32} height={37} src={quoteImg} alt="Quote" className="" />
      </div>
      <p className="text-gray text-base leading-[25px] px-5 py-[67px]">
        {review?.content}
      </p>
      <div className="absolute -bottom-[87px] right-0 left-0 mx-auto flex justify-center">
        <div className="grid justify-center">
          <div className="bg-white p-1 rounded-full mb-2 inline-block mx-auto">
            {/* <Image
              width={68}
              height={68}
              src={imgOne}
              alt="Client Image"
              className="rounded-full w-[68px] h-[68px] object-cover flex justify-center"
            /> */}
            <div className="rounded-full w-[68px] h-[68px] flex items-center justify-center bg-primary text-white text-3xl font-bold">
              {review?.name?.charAt(0).toUpperCase()}
            </div>
          </div>
          <h2 className="text-base text-black font-bold leading-5">
            {review?.name}
          </h2>
          {/* ratings */}
          <div className="flex items-center justify-center">
            <ReactStars
              count={5}
              value={review?.ratings}
              size={24}
              color2={"#ffd700"}
              edit={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonialcard;
