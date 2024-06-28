import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#c6dbce",
        primaryStrong: "#84b898",
        background: "#e5ede8",
        primaryStronger: "#4a8b6e",
        secondary: "#ffcc00",
        secondaryStrong: "#ff9900",
        accent: "#ff6666",
        accentStrong: "#cc3333",
        neutral: "#f5f5f5",
        neutralDark: "#d9d9d9",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        play: ["Play", "sans-serif"],
        playwrite: ["Playwrite IT Moderna", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
