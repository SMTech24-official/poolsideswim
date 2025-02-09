import React from "react";
import blogImage from "@/assets/blog/blog.svg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

const BlogCard = () => {
  return (
    <div className="md:w-[384px] grid gap-6 mx-auto">
      <div className="grid gap-4">
        <Image
          width={384}
          height={384}
          src={blogImage}
          alt="Blog Image"
          className="md:w-[384px] md:h-[384px] rounded-lg"
        />
        <p className="text-base text-gray leading-[25px]">
          July 01, 2024 No Comments
        </p>
        <h2 className="text-xl font-semibold leading-7 text-black">
          The Great Debate: Should My Kids Take Swim Lessons in Winter?
        </h2>
        <p className="text-gray500 text-base leading-[25px]">
          Cold Weather, Warm Water – Why Winter Might Be the Best Time for Swim
          Lessons!
        </p>
      </div>
      <Link
        href="/blog"
        className="text-base text-primary font-bold leading-[25px] uppercase flex items-center gap-2"
      >
        Read More <FaArrowRight />
      </Link>
    </div>
  );
};

export default BlogCard;
