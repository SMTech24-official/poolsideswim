"use client";

import Image from "next/image";
import React from "react";
import shapeIcon from "@/assets/shape.svg";
import SharedButton from "../shared/SharedButton";
import Testimonialcard from "../allCards/Testimonialcard";
import Link from "next/link";
import { TestimonialData } from "../data/TestimonialData";
import { usePathname } from "next/navigation";

const Testimonial = () => {
  const pathname = usePathname();
  const testimonial = pathname.split("/").pop();
  // console.log(testimonial);
  return (
    <div className="bg-gray4 pt-[112px] pb-[167px]">
      <div className="container grid xl:flex items-center gap-6">
        {/* section header */}
        <div>
          <div className="flex gap-2 items-center">
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
          </div>
          <h2 className="text-black text-[40px] font-bold leading-[48px] py-4">
            What People Says?
          </h2>
          <p className="text-gray text-base leading-[25px]">
            Real Stories, Real Success – Hear How Our Swimmers Have Gained
            Confidence, Mastered New Skills, and Enjoyed Their Journey with Back
            to Basics Swim!
          </p>
          {testimonial ? (
            ""
          ) : (
            <>
              <Link href="/testimonial">
                <SharedButton classes="mt-10 xl:mt-20" text="View All" />
              </Link>
            </>
          )}
        </div>
        <div className="grid md:flex items-center gap-36 md:gap-6">
          {TestimonialData?.slice(0, 2)?.map((review) => (
            <Testimonialcard key={review?.id} review={review} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
