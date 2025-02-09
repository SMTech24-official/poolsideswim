import React from "react";
import SectionHeader from "../shared/SectionHeader";
import ProgramCard from "../allCards/ProgramCard";
import { programData } from "../data/ProgramData";

const ProgramCategories = () => {
  return (
    <div className="container">
      <SectionHeader
        classes="text-center"
        title="Program Categories"
        subTitle="Get started on your swim journey with expert lessons in a safe, fun environment! Our certified instructors provide personalized instruction for all ages and skill levels. With flexible schedules and easy booking, it’s never been easier to dive in. Join us today and watch your child gain confidence and skill in the water!"
      />
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-[150px] lg:gap-y-[197px] mt-10 mx-auto">
        {programData?.map((program, index) => (
          <ProgramCard key={index} program={program} />
        ))}
      </div>
    </div>
  );
};

export default ProgramCategories;
