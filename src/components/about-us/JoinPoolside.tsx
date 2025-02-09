import React from "react";
import SectionHeader from "../shared/SectionHeader";
import aboutImg from "@/assets/about/aboutImage3.svg";
import Image from "next/image";

const JoinPoolside = () => {
  return (
    <div className="container">
      <SectionHeader
        classes="text-center"
        title="Join poolside swimming Today"
        subTitle="Get started on your swim journey with expert lessons in a safe, fun environment! Our certified instructors provide personalized instruction for all ages and skill levels. With flexible schedules and easy booking, it’s never been easier to dive in. Join us today and watch your child gain confidence and skill in the water!"
      />
      <div className="bg-primary rounded-md xl:rounded-lg text-white mt-10 grid xl:flex items-center gap-12">
        <Image
          width={1000}
          height={1000}
          src={aboutImg}
          alt="About Image"
          className="w-full xl:w-[668px] xl:h-[497px] rounded-lg"
        />
        <div className="p-5 xl:p-0">
          <h2 className="text-[40px] font-bold leading-[48px] mb-6">
            Your Child’s Swim Journey
          </h2>
          <p className="text-base leading-[25px]">
            At Poolside Swimming, we guide your child through every step of
            their swimming journey. Our expert instructors help build
            confidence, teach essential skills, and ensure water safety. From
            beginner to advanced, we make learning fun and rewarding. Watch your
            child grow into a confident swimmer with us!
          </p>
          <button className="mt-[48px] px-6 py-4 rounded-full border uppercase text-base font-bold leading-[25px] text-white">
            our swim levels
          </button>
        </div>
      </div>
    </div>
  );
};

export default JoinPoolside;
