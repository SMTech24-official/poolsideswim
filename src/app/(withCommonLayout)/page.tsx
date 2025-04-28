import About from "@/components/home/About";
import AdditionalServices from "@/components/home/AdditionalServices";
import Banner from "@/components/home/Banner";
import Courses from "@/components/home/Courses";
import LifeSavingSocietyPrograms from "@/components/home/LifeSavingSocietyPrograms";
import OurServices from "@/components/home/OurServices";
import RedCrossPrograms from "@/components/home/RedCrossPrograms";
import Testimonial from "@/components/home/Testimonial";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <Banner />
      <About />
      <Courses /> 
      <OurServices />
      {/* <OurGallery /> */}
      <WhyChooseUs />
      {/* <Blog /> */}
      <RedCrossPrograms />
      <LifeSavingSocietyPrograms />
      <AdditionalServices />
      <Testimonial />
    </div>
  );
};

export default page;
