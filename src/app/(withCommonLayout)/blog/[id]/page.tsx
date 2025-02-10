import BlogDetails from "@/components/blog/BlogDetails";
import SharedBanner from "@/components/shared/SharedBanner";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <SharedBanner title="Our Blogs" routeName="Blog" />
      <BlogDetails />
    </div>
  );
};

export default page;
