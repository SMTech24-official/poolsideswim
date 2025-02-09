import React from "react";
import SectionHeader from "../shared/SectionHeader";
import BlogCard from "../allCards/BlogCard";
import { BlogData } from "../data/BlogData";

const LatestBlog = () => {
  return (
    <div className="container">
      <SectionHeader
        classes="text-center"
        title="Explore Our Latest Blog Posts"
        subTitle="Dive into Expert Tips, Swim Techniques, and Water Safety Advice to Enhance Your Swimming Journey"
      />

      <div className="grid lg:grid-cols-2 xl:grid-cols-3 mt-10 mx-auto justify-center">
        {BlogData?.map((blog) => (
          <BlogCard key={blog?.id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default LatestBlog;
