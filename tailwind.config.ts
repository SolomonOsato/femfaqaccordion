import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
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
          "linear-gradient(to top, hsl(240, 73%, 65%), hsl(273, 75%, 66%))",
      },
    },
  },
  plugins: [],
};
export default config;
