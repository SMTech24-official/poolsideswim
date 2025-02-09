import BasicSwims from "@/components/about-us/BasicSwims";
import JoinPoolside from "@/components/about-us/JoinPoolside";
import PoolSideSwim from "@/components/about-us/PoolSideSwim";
import Team from "@/components/about-us/Team";
import SharedBanner from "@/components/shared/SharedBanner";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <SharedBanner title="About us" routeName="About" />
      <BasicSwims />
      <PoolSideSwim />
      <JoinPoolside />
      <Team />
    </div>
  );
};

export default page;
