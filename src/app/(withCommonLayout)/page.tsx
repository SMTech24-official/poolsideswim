import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import OurServices from "@/components/home/OurServices";
import Testimonial from "@/components/home/Testimonial";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <Banner />
      <About />
      <OurServices />
      {/* <OurPrograms /> */}
      {/* <OurGallery /> */}
      <WhyChooseUs />
      {/* <Blog /> */}
      <Testimonial />
    </div>
  );
};

export default page;
