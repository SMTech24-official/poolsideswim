import AuthNavbar from "@/components/shared/AuthNavbar";
import Footer from "@/components/shared/Footer";
import React, { ReactNode } from "react";
import { Toaster } from "sonner";

const layout = ({ children }: { children: ReactNode }) => {
  return (
      <body>
        <AuthNavbar />
        <main>{children}</main>
        <Toaster />
        <Footer />
      </body>
  );
};

export default layout;
