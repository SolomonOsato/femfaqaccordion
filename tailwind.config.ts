import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: {
          blue: "hsl(238 29% 16%)",
          red: "hsl(14 88% 65%)",
        },
        neutral: {
          blue: "hsl(240 6% 50%)",
          vblue: "hsl(237 12% 33%)",
          divider: "hsl(240 5% 91%)",
        },
      },
      backgroundImage: {
        gradient:
          "linear-gradient(to top, hsl(240, 73%, 65%) 10%, hsl(273, 75%, 66%) 50%)",
        mobile: "url('/images/bg-pattern-mobile.svg')",
        desktop: "url('/images/bg-pattern-desktop.svg')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
