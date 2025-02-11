import Testimonial from "@/components/home/Testimonial";
import ProgramCategories from "@/components/services/ServicesCategories";
import SharedBanner from "@/components/shared/SharedBanner";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <SharedBanner title="Our programs" routeName="Programs" />
      <ProgramCategories />
      <div className="mt-[120px]">
        <Testimonial />
      </div>
    </div>
  );
};

export default page;
