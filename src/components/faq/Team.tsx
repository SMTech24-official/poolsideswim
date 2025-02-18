import React from "react";
import TeamMemberCard from "../allCards/TeamMemberCard";

const Team = () => {
  return (
    <div className="container">
      <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-x-6 gap-y-10 md:gap-y-24 items-center">
        {/* section header */}
        <div className="grid gap-6">
          <h2 className="text-black leading-[48px] font-bold text-[40px]">
            Meet The Team
          </h2>
          <p className="text-gray text-base leading-[25px]">
            Our certified instructors are passionate about helping swimmers of
            all levels succeed. With a focus on safety, fun, and personalized
            attention, our team is here to support you every step of the way!
          </p>
        </div>
        {/* team members cards */}
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
        <TeamMemberCard />
      </div>
    </div>
  );
};

export default Team;
