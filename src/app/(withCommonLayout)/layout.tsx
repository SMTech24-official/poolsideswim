import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";
import React, { ReactNode } from "react";

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </div>
  );
};

export default layout;
