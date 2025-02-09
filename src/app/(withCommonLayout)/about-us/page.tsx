import About from "@/components/about-us/About";
import SharedBanner from "@/components/shared/SharedBanner";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <SharedBanner title="About us" routeName="About" />
      <About />
    </div>
  );
};

export default page;
