import CheckoutPage from "@/components/checkout/CheckoutPage";
import SharedBanner from "@/components/shared/SharedBanner";
import React from "react";

const page = () => {
  return (
    <div className="grid gap-[60px] lg:gap-[120px]">
      <SharedBanner title="Join Our Team and Make" routeName="Check Out" />
      <CheckoutPage />
    </div>
  );
};

export default page;
