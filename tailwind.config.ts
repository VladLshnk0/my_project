import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'underline': 'text-decoration-line',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "blue": "#002856",
        "light-blue": "#92C0E9",
        "bright-blue": "#329ADE",
        "turquoise": "#00ADBB",
        "bg-color": "#F2F2F2",
        "gray" : "#A7A8A9",
        "dark-gray": "#6F7271",
        "grass": "#A8AD00",
      },
      screens: {
        short: { 'raw': '(max-height: 1000px)' },
        tall: { 'raw': '(min-height: 1000px)' },
        default: '1440px',
      },
    },
  },
  plugins: [],
};
export default config;
