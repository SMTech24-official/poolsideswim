import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Poolsideswim",
  description: "Swim with Confidence, Learn with Experts",
};

import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // Add the required weights
  variable: "--font-poppins", // Define a CSS variable for Tailwind
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>{children}</body>
    </html>
  );
}
