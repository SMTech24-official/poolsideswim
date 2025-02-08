import About from "@/components/home/About";
import Banner from "@/components/home/Banner";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <Banner />
      <About />
    </div>
  );
};

export default page;
