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
        primary: {
          DEFAULT: "#0F4C4C",
          dark: "#003434",
          container: "#0F4C4C",
          fixed: "#b5edec",
        },
        secondary: {
          DEFAULT: "#C1633C",
          hover: "#A44E2B",
          container: "#fc9267",
        },
        tertiary: {
          DEFAULT: "#8A9A7E",
          dark: "#24311c",
          container: "#3a4831",
        },
        surface: {
          DEFAULT: "#FAF6F0",
          alt: "#F1FCF8",
          container: "#F3EDE2",
          dim: "#d1dcd9",
          bright: "#f1fcf8",
        },
        "on-primary": "#FFFFFF",
        "on-secondary": "#FFFFFF",
        "on-surface": "#26302E",
        "on-surface-variant": "#404848",
        "on-primary-container": "#85bbbb",
        "on-secondary-container": "#742a06",
        "on-tertiary-container": "#a6b699",
        outline: "#707978",
        "outline-variant": "#bfc8c8",
      },
      fontFamily: {
        headline: ["var(--font-playfair)", "Playfair Display", "serif"],
        body: ["var(--font-jakarta)", "Plus Jakarta Sans", "sans-serif"],
      },
      spacing: {
        "space-xs": "0.25rem",
        "space-sm": "0.5rem",
        "space-md": "1rem",
        "space-lg": "1.5rem",
        "space-xl": "2.5rem",
        "gutter-mobile": "1rem",
        gutter: "1.5rem",
        "margin-mobile": "1.25rem",
        margin: "3rem",
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1.125rem",
        full: "9999px",
      },
      boxShadow: {
        amber: "0 8px 24px -4px rgba(38, 48, 46, 0.06), 0 2px 6px -1px rgba(193, 99, 60, 0.04)",
        active: "0 16px 32px -8px rgba(15, 76, 76, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
