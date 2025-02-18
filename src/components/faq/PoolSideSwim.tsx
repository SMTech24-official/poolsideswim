import Image from "next/image";
import React from "react";
import aboutImage from "@/assets/about/aboutImage.png";

const PoolSideSwim = () => {
  return (
    <div className="container">
      <Image
        width={1000}
        height={1000}
        src={aboutImage}
        alt="About Image"
        className="w-full md:h-[657px] rounded-lg object-cover "
      />
    </div>
  );
};

export default PoolSideSwim;
