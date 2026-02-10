import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4CAF50",
        "primary-accent": "#66BB6A",
        accent: "#8BC34A",
        "deep-green": "#388E3C",
        gold: "#FFCA28",
        "gold-dark": "#FFB300",
        orange: "#FF9800",
        "bg-warm": "#FFF8E1",
        "bg-warm-alt": "#FAF9F6",
        "sky-blue": "#81D4FA",
        navy: "#1A237E",
        "text-dark": "#2E3A3F",
        error: "#EF5350",
      },
      borderRadius: {
        card: "16px",
        "card-lg": "24px",
        button: "16px",
      },
      minHeight: {
        "tap-target": "48px",
      },
      minWidth: {
        "tap-target": "48px",
      },
      fontFamily: {
        sans: ["system-ui", "sans-serif"],
        display: ["system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
