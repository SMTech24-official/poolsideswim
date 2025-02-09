import Image from "next/image";
import React from "react";
import shapeIcon from "@/assets/shape.svg";
import SharedButton from "../shared/SharedButton";
import Testimonialcard from "../allCards/Testimonialcard";

const Testimonial = () => {
  return (
    <div className="bg-gray4">
      <div className="container flex items-center gap-6 py-20">
        {/* section header */}
        <div>
          <p className="flex gap-2 items-center">
            <Image
              width={20}
              height={10}
              src={shapeIcon}
              alt="Icon"
              className="rounded-lg"
            />
            <h2 className="text-primary font-bold text-base leading-5 uppercase">
              Testimonial
            </h2>
          </p>
          <h2 className="text-black text-[40px] font-bold leading-[48px] py-4">
            What People Says?
          </h2>
          <p className="text-gray text-base leading-[25px]">
            Real Stories, Real Success – Hear How Our Swimmers Have Gained
            Confidence, Mastered New Skills, and Enjoyed Their Journey with Back
            to Basics Swim!
          </p>
          <SharedButton classes="mt-20" text="View All" />
        </div>
        <div className="flex items-center gap-6">
          <Testimonialcard />
          <Testimonialcard />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
