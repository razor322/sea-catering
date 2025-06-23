import type { Config } from "tailwindcss";
import fontFamily from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4CAF50",
          foreground: "#ffffff",
        },
        secondary: {
          DEFAULT: "#FFB703",
          foreground: "#000000",
        },
      },
      fontFamily: {
        sans: ["Inter", ...fontFamily.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;
