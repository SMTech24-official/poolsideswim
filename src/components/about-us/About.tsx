import Image from "next/image";
import React from "react";
import aboutImage from "@/assets/about/aboutImage2.svg";
import shapeIcon from "@/assets/shape.svg";

const About = () => {
  return (
    <div className="container grid gap-[60px] lg:gap-[120px]">
      <div className="grid xl:flex items-center gap-6 md:gap-12">
        <Image
          width={1000}
          height={1000}
          src={aboutImage}
          alt="About Image"
          className="w-[666px] md:h-[657px]"
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
      <div className="grid xl:flex flex-row-reverse items-center gap-6 md:gap-12">
        <div className="w-[666px] h-[657px] rounded-lg">
          <iframe
            className="rounded-lg"
            width="666"
            height="657"
            src="https://www.youtube.com/embed/w4xKguZ1D1o?si=dmetLUGIcQ4TG-Fo"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
        <div className="grid gap-6 md:gap-12">
          <div className="grid gap-4">
            <h2 className="text-[40px] font-bold leading-[48px]">
              Explore the poolside swimming
            </h2>
            <p className="text-base leading-[25px] text-gray">
              At Poolside Swimming, we offer a range of lessons designed to help
              swimmers of all ages and abilities grow and succeed. Whether your
              child is just starting out or looking to refine their technique,
              our expert instructors provide personalized, step-by-step
              guidance. Safety, skill development, and building confidence are
              at the heart of every class. Our state-of-the-art facilities
              provide a comfortable, supportive environment for learning. From
              group lessons to private coaching, we offer flexible options to
              meet your family’s needs. We focus on making each lesson engaging
              and fun, ensuring your child enjoys every moment in the water.
              Explore our programs today and take the first step toward a
              lifetime of swimming confidence and enjoyment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
