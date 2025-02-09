import React from "react";
import { TestimonialData } from "../data/TestimonialData";
import Testimonialcard from "../allCards/Testimonialcard";

const TestimonialPage = () => {
  return (
    <div className="container grid md:grid-cols-2 xl:grid-cols-3 items-center gap-y-[150px] gap-x-6 xl:gap-x-6 xl:gap-y-[159px] mx-auto">
      {TestimonialData?.map((review) => (
        <Testimonialcard key={review?.id} review={review} />
      ))}
    </div>
  );
};

export default TestimonialPage;
