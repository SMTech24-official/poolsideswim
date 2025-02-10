import Image from "next/image";
import React from "react";
import blogDetails from "@/assets/blog/blog-details.svg";
import dateIcon from "@/assets/blog/date.svg";

const BlogDetails = () => {
  return (
    <div className="container">
      {/* title */}
      <h1 className="text-[32px] font-bold leading-[38px] mb-5 text-black">
        The Great Debate: Should My Kids Take Swim Lessons in Winter?
      </h1>
      {/* blog image */}
      <Image
        width={1000}
        height={1000}
        src={blogDetails}
        alt="Blog Image"
        className="w-full object-cover h-[622px] mb-6 rounded-lg"
      />
      {/* date */}
      <div className="flex items-center gap-4 mb-8">
        <Image width={24} height={24} src={dateIcon} alt="Date Icon" />
        <p className="text-base leading-[25px] text-gray">July 01, 2024</p>
      </div>
    </div>
  );
};

export default BlogDetails;
