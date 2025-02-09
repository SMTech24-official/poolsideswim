import Image from "next/image";
import React from "react";
import shapeIcon from "@/assets/shape.svg";
import SectionHeader from "../shared/SectionHeader";
import BlogCard from "../allCards/BlogCard";

const Blog = () => {
  return (
    <div className="container">
      {/* blog title shape */}
      <p className="flex gap-2 items-center justify-center mb-4">
        <Image
          width={20}
          height={10}
          src={shapeIcon}
          alt="Icon"
          className="rounded-lg"
        />
        <h2 className="text-primary font-bold text-base leading-5 uppercase">
          About
        </h2>
      </p>
      {/* section header */}
      <SectionHeader
        classes="text-center"
        title="Explore Our Latest Blog Posts"
        subTitle="Dive into Expert Tips, Swim Techniques, and Water Safety Advice to Enhance Your Swimming Journey"
      />

      {/* Blog Cards */}
      <div className="grid lg:grid-cols-2 xl:grid-cols-3 mt-10 mx-auto justify-center">
        <BlogCard />
        <BlogCard />
        <BlogCard />
      </div>
    </div>
  );
};

export default Blog;
