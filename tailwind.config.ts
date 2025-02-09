import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "7rem",
          "2xl": "8rem",
        },
        screens: {
          "2xl": "1580px",
          xl: "1440px",
          lg: "1024px",
          md: "100%",
          sm: "100%",
        },
      },
      colors: {
        primary: "#015584",
        secondary: "#0284D0",
        white: "#ffffff",
        whiteSmoke: "#f5f5f5",
        silver: "#D2D2D2",
        black: "#01161B",
        carbon: "#333333",
        gray: "#616161",
        blue: "#001E2E",
        yellow: "#F0BC3C",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", ...defaultTheme.fontFamily.sans],
      },
      boxShadow: {
        customShadow: "0px 5px 10px 0px rgba(0, 0, 0, 0.10)",
        customShadowMd: "0px 5px 40px 0px rgba(0, 0, 0, 0.10)",
      },
    },
  },
  plugins: [],
} satisfies Config;
