"use client";

import Image from "next/image";
import React from "react";
import SharedButton from "../shared/SharedButton";
import { ProgramType } from "@/app/types/Program";

interface ProgramTypes {
  item: ProgramType;
}

const CourseCard = ({ item }: ProgramTypes) => {
  return (
    <div className="md:w-[384px] border rounded-lg border-silver p-5 mx-auto">
      <div className="relative md:w-[344px] h-[320px] mb-4 ">
        <Image
          width={1000}
          height={1000}
          src={item?.images?.url}
          alt={item?.images?.altText}
          className="md:w-[344px] h-[320px]object-cover"
        />
        <p className="absolute bottom-0 left-0 text-2xl font-semibold leading-7 bg-primary text-white px-6 py-[10px] rounded-bl-lg rounded-tr-lg">
          $<span>{item?.price}</span>
        </p>
      </div>
      <h2 className="text-black text-xl font-semibold leading-7 mb-3">
        {item?.title}
      </h2>
      <div className="grid gap-4">
        <p className="text-gray text-base leading-6">{item?.description}</p>
        <div className="border-silver border-b"></div>
        <p className="text-gray leading-6">
          <span className="font-medium">Prerequisite: </span>
          {item?.prerequisite}
        </p>
        <div className="border-silver border-b"></div>
        <div className="flex items-center justify-between text-gray">
          <p className="leading-6">
            Duration : <span>{item?.duration}</span>
          </p>
          <div className="border-silver border border-b-[24px]"></div>
          <p className="leading-6">{item?.schedule}</p>
        </div>
        <div className="border-silver border-b"></div>
        <SharedButton classes="w-full py-3" text="Book now" />
      </div>
    </div>
  );
};

export default CourseCard;
