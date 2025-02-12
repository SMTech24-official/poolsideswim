import RequestAQuooreForm from "@/components/RequestAQuooreForm";
import SharedBanner from "@/components/shared/SharedBanner";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <SharedBanner
        title="Adult classes"
        subtitle="We offer swimming  lessons in summer in comfort or you own pool or our."
        routeName="Request a quoore"
      />
      <RequestAQuooreForm />
    </div>
  );
};

export default page;
