import BasicSwims from "@/components/about-us/BasicSwims";
import PoolSideSwim from "@/components/about-us/PoolSideSwim";
import SharedBanner from "@/components/shared/SharedBanner";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <SharedBanner title="About us" routeName="About" />
      <BasicSwims />
      <PoolSideSwim />
    </div>
  );
};

export default page;
