import Testimonial from "@/components/home/Testimonial";
import SharedBanner from "@/components/shared/SharedBanner";
import TestimonialPage from "@/components/testimonial/TestimonialPage";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <SharedBanner title="What People says" routeName="Testimonial" />
      <Testimonial />
      <TestimonialPage />
    </div>
  );
};

export default page;
