import React from "react";
import SectionHeader from "../shared/SectionHeader";
import { programData } from "../data/ProgramData";
import CourseCard from "../allCards/CourseCard";

const Courses = () => {
  return (
    <div className="container grid gap-10">
      <SectionHeader
        classes="text-center"
        title="LIfesaving Courses"
        subTitle="Bronze medal awards are designed for swimmers who are looking for challenge or beginning the path towards becoming a Lifeguard or Swimming Instructor"
      />

      <div className="grid lg :grid-cols-2 xl:grid-cols-3 gap-6 items-start">
        {programData?.map((item) => (
          <CourseCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
