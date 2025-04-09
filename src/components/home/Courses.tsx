"use client";

import React, { useEffect, useState } from "react";
import SectionHeader from "../shared/SectionHeader";
import CourseCard from "../allCards/CourseCard";
import { useGetCourseQuery } from "@/redux/api/courseApi";
import { CourseType } from "@/app/types/Program";
import Loading from "../shared/Loading";

const Courses = () => {
  const [courseData, setCourseData] = useState<CourseType[]>([]);
  const { data, isLoading } = useGetCourseQuery("");

  useEffect(() => {
    fetch("./courses-award.json")
      .then((response) => response.json())
      .then((result) => console.log("Local Data", setCourseData(result)))
      .catch((err) => console.error("Failed to load JSON", err));
  }, []);


  // const courseData = data?.data;
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="container grid gap-10" id="course">
      <SectionHeader
      
        classes="text-center"
        title="LIfesaving Courses"
        subTitle="Bronze medal awards are designed for swimmers who are looking for challenge or beginning the path towards becoming a Lifeguard or Swimming Instructor"
      />

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-6 items-start" >
        {courseData?.map((item: CourseType) => (
          <CourseCard key={item?.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Courses;
