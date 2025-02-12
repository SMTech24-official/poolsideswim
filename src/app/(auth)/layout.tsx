import AuthNavbar from "@/components/shared/AuthNavbar";
import Footer from "@/components/shared/Footer";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
      <body>
        <AuthNavbar />
        <main>{children}</main>
        <Footer />
      </body>
  );
};

export default layout;
