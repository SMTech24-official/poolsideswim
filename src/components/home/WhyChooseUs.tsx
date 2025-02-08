import React from "react";
import SectionHeader from "../shared/SectionHeader";
import Image from "next/image";
import badgeIcon from "@/assets/why-choose-us/badge.svg";

const WhyChooseUs = () => {
  return (
    <div className="container">
      <SectionHeader
        classes="text-center"
        title="Why Choose Us"
        subTitle="Experience the Best in Swimming Education – Safe, Professional, and Tailored Just for You"
      />
      <div className="grid grid-cols-3 gap-6">
        <div>
          <div className="bg-primary p-2 rounded inline-block">
            <Image src={badgeIcon} alt="Badge" />
          </div>
          <h2 className="text-xl font-semibold leading-[28px] text-black">
            Certified swimming instructors
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
