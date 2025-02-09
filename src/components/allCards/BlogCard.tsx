import React from "react";
import blogImage from "@/assets/blog/blog.svg";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";
import { BlogType } from "@/app/types/Blog";

interface BlogDataProps {
  blog: BlogType;
}

const BlogCard = ({ blog }: BlogDataProps) => {
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
        <p className="text-base text-gray leading-[25px]">{blog?.date}</p>
        <h2 className="text-xl font-semibold leading-7 text-black">
          {blog?.title}
        </h2>
        <p className="text-gray500 text-base leading-[25px]">{blog?.content}</p>
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
