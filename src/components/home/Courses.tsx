"use client";

import React from "react";
import SectionHeader from "../shared/SectionHeader";
import CourseCard from "../allCards/CourseCard";
import { useGetCourseQuery } from "@/redux/api/courseApi";
import { CourseType } from "@/app/types/Program";

const Courses = () => {
  const { data } = useGetCourseQuery("");
  console.log(data?.data);
  const courseData = data?.data;
  return (
    <div className="container grid gap-10">
      <SectionHeader
        classes="text-center"
        title="LIfesaving Courses"
        subTitle="Bronze medal awards are designed for swimmers who are looking for challenge or beginning the path towards becoming a Lifeguard or Swimming Instructor"
      />

      <div className="grid lg :grid-cols-2 xl:grid-cols-3 gap-6 items-start">
        {courseData?.map((item: CourseType) => (
          <CourseCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
