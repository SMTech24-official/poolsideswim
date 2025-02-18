import Image from "next/image";
import React from "react";
import aboutImage from "@/assets/about/aboutImage2.png";
import shapeIcon from "@/assets/shape.png";

const BasicSwims = () => {
  return (
    <div className="container">
      <div className="grid xl:flex items-center gap-6 md:gap-12">
        <Image
          width={1000}
          height={1000}
          src={aboutImage}
          alt="About Image"
          className="md:w-[666px] md:h-[657px]"
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
            <p className="text-base leading-[25px] text-gray">
              At Back to Basics Swim, we believe everyone can become a confident
              swimmer with the right guidance.Our certified instructors provide
              personalized coaching tailored to all skill levels and ages.We
              emphasize water safety, technique development, and building
              confidence in every lesson. Whether you&apos;re a beginner or
              refining your strokes, our structured programs ensure steady
              progress. With small class sizes, we offer individual attention
              for an effective learning experience. Our step-by-step approach
              makes swimming fun, safe, and rewarding for all. We create a
              supportive environment where swimmers feel encouraged to
              improve.Join us to develop essential skills and a lifelong love
              for swimming. Dive in today and start your journey with Back to
              Basics Swim!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicSwims;
