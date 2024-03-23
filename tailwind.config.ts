import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        offBlack: "#2D2828",
        offWhite: "#F4F0F0",

        primaryLight: "#9BCFCC",
        primary: "#75B9BE",
        primaryDark: "#4293A5",

        secondaryLight: "#B896B0",
        secondary: "#987284",
        secondaryDark: "#804D59",

        accentLight: "#E7E6CA",
        accent: "#D0D6B5",
        accentDark: "#A5B681",

        highlight1: "#F9B5AC",
        highlight2: "#EE7674",
      },
      keyframes: {
        "fade-in-out": {
          "0%": { opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-out": "fade-in-out 2s infinite",
        "fade-in": "fade-in 2s forwards",
      },
    },
  },
  plugins: [],
};
export default config;
