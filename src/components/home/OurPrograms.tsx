import React from "react";
import SectionHeader from "../shared/SectionHeader";
import ProgramCard from "../allCards/ProgramCard";
import { programData } from "../data/ProgramData";

const OurPrograms = () => {
  return (
    <div className="container grid gap-10">
      <SectionHeader
        classes="text-center"
        title="Program Categories"
        subTitle="Start your swim journey with expert lessons in a fun, safe environment. Flexible schedules, certified instructors, and personalized training for all ages"
      />

      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6 items-start">
        {programData?.map((item) => (
          <ProgramCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default OurPrograms;
