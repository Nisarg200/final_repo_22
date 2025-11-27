import type { Config } from "tailwindcss";

export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          DEFAULT: "#15313D", 
          light: "#3CABDA",   
        },
        card: "#F4FDFF",
        aurora1: "#BECFEE",
        aurora2: "#71C6E2",
        azure: "#C6E9F7",
        cyan: "#9ED9EE",
      },
      fontFamily: {
        serifDisplay: ["'DM Serif Display'", "serif"],
        caveat: ["'Caveat Brush'", "cursive"],
        inter: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        'card-lg': '42px',
        'card-xl': '50px',
      },
      boxShadow: {
        frosted: "0 43.6262px 69.1583px rgba(0,0,0,0.63)",
        soft: "0 6px 14px rgba(0,0,0,0.03)",
      },
    },
  },
  plugins: [],
} satisfies Config;
