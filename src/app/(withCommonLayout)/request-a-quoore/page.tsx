import RequestAQuooreForm from "@/components/RequestAQuooreForm";
import SharedBanner from "@/components/shared/SharedBanner";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <SharedBanner
        title="Lifeguarding Services"
        routeName="Request a quoore"
      />
      <RequestAQuooreForm />
    </div>
  );
};

export default page;
