import LatestBlog from "@/components/blog/LatestBlog";
import Testimonial from "@/components/home/Testimonial";
import SharedBanner from "@/components/shared/SharedBanner";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <SharedBanner title="Our Blogs" routeName="Blog" />
      <LatestBlog />
      <Testimonial />
    </div>
  );
};

export default page;
