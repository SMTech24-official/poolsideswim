import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import OurPrograms from "@/components/home/OurPrograms";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <Banner />
      <About />
      <OurPrograms />
    </div>
  );
};

export default page;
