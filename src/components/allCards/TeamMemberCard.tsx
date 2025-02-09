import Image from "next/image";
import React from "react";
import memberImg from "@/assets/team/member.svg";

const TeamMemberCard = () => {
  return (
    <div className="relative lg:w-[384px]">
      <Image
        width={1000}
        height={1000}
        src={memberImg}
        alt="Member Image"
        className="lg:w-[384px] h-[400px] rounded-lg"
      />
      <div className="absolute -bottom-10 right-0 left-0 mx-auto w-[304px] bg-white grid gap-2 p-5 rounded-lg">
        <h3 className="text-primary text-2xl font-semibold leading-7">
          Ethan Brooks
        </h3>
        <p className="text-base leading-[25px]">Head Swim Instructor</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
