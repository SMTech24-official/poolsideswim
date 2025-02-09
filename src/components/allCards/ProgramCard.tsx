import Image from "next/image";
import React from "react";
import programImage from "@/assets/program/program.svg";
import { ProgramType } from "@/app/types/Program";
import SharedButton from "../shared/SharedButton";

interface ProgramProps {
  program: ProgramType;
}

const ProgramCard = ({ program }: ProgramProps) => {
  return (
    <div className="lg:w-[384px] relative mx-auto">
      <Image
        width={1000}
        height={1000}
        src={programImage}
        alt="Program Image"
        className="lg:w-[384px] h-[250px] rounded-lg"
      />
      <div className="absolute -bottom-[105px] right-0 left-0 mx-auto w-[347px] p-5 rounded-lg bg-white shadow-customShadow grid gap-[11px] pb-[36px]">
        <div className="grid gap-2">
          <h2 className="text-carbon text-2xl font-semibold leading-7">
            {program?.title}
          </h2>
          <p className="text-gray text-base leading-[25px]">
            {program?.content}
          </p>
        </div>
        <div className="absolute right-0 left-0 -bottom-[25px] flex justify-center">
          <SharedButton classes="" text="Learn More" />
        </div>
      </div>
    </div>
  );
};

export default ProgramCard;
