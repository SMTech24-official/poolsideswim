import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import Blog from "@/components/home/Blog";
import OurGallery from "@/components/home/OurGallery";
import OurPrograms from "@/components/home/OurPrograms";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <Banner />
      <About />
      <OurPrograms />
      <OurGallery />
      <WhyChooseUs />
      <Blog />
    </div>
  );
};

export default page;
