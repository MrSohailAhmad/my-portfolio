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
        "bg-color": "#34353A",
        "bg-light": "#3D3E42",
        "primary-color": "#FFC86B",
        "secoundery-color": "#8B8B8C",
        "white-color": "#F9F9F9",
        "shadow-b": "",
      },
    },
  },
  plugins: [],
};
export default config;
